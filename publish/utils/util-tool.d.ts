import { DomainType } from "../types";
import { Type } from "./type";
export declare class UtilTool {
    static uuid(): string;
    static isArray(data: any): boolean;
    static isString(data: any): boolean;
    static isDate(data: any): boolean;
    static transformType(value: any, domainType: DomainType, genericType?: Type<any>): string | number | boolean | any[] | Date;
    static transformType_String(value: string): string;
    static transformType_Number(value: number | string): number;
    static transformType_Date(value: string | Date): Date;
    static transformType_Boolean(value: boolean): boolean;
    static transformType_Array(value: Array<any>, genericType?: Type<any>): any[];
}
