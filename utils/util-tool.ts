import {BasicDataType} from "../enums";
import {DomainType} from "../types";
import {Type} from "./type";

export class UtilTool{
    public static uuid(){
        function createRandom(){
            return (((Math.random() + 1) * 0x10000) | 0 ).toString(16).substring(1);
        }

        return createRandom() + createRandom() + '-' + createRandom() + createRandom() + createRandom() + '-' + createRandom() + createRandom();
    }

    public static isArray(data){
        const type = Object.prototype.toString.call(data);
        return type === BasicDataType.ARRAY_CLASS;
    }

    public static isString(data){
        const type = Object.prototype.toString.call(data);
        return type === BasicDataType.STRING_CLASS;
    }

    public static isDate(data){
        const type = Object.prototype.toString.call(data);
        return type === BasicDataType.DATE_CLASS;
    }

    public static transformType(value: any, domainType: DomainType, genericType?: Type<any>){
        switch (domainType) {
            case "string":
                return this.transformType_String(value);
            case "number":
                return this.transformType_Number(value);
            case "date":
                return this.transformType_Date(value);
            case "boolean":
                return this.transformType_Boolean(value);
            case "array":
                return this.transformType_Array(value, genericType);
            case "object":
                return this.transformType_String(value);
            default:
                return this.transformType_String(value);
        }
    }
    public static transformType_String(value: string){
        return value || '';
    }

    public static transformType_Number(value: number | string){
        return !value? 0: Number.parseFloat(value.toString());
    }

    public static transformType_Date(value: string | Date){
        if (!value) {
            return;
        }
        if (typeof value === 'string') {
            value = value.replace(/T/g, ' ');
            if (value === '0001-01-01 00:00:00') {
                return;
            }
            const dateArr = value.match(/\d+/g)!.map(item => Number.parseInt(item, 10));
            value = new Date(dateArr[0], dateArr[1] - 1, dateArr[2], dateArr[3] || 0, dateArr[4] || 0, dateArr[5] || 0);
        }
        if (value.getTime() < -2209017600000) {
            return;
        }
        return value;
    }


    public static transformType_Boolean(value: boolean){
        return !!value;
    }

    public static transformType_Array(value: Array<any>, genericType?: Type<any>){
        if(!value){
            return []
        }

        if(!genericType){
            return value;
        }

        switch (genericType) {
            case Date:
                return value.map(item => this.transformType_Date(item));
            case String:
                return value.map(item => this.transformType_String(item));
            case Number:
                return value.map(item => this.transformType_Number(item));
            case Boolean:
                return value.map(item => this.transformType_Boolean(item));
            default:
                return value.map(item => new genericType(item));
        }

    }


}