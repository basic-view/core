import {UtilTool} from "../utils";

export class ViewBasicData {
    private readonly __property: ViewBasicDataProperty;

    constructor() {
        this.__property = new ViewBasicDataProperty();
    }

    public get uuid(): string{
        return this.__property.uuid;
    }

    public get isActive(): boolean{
        return this.__property.isActive;
    }

    public set isActive(data: boolean){
        this.__property.isActive = data;
    }

    public get isChecked(): boolean{
        return this.__property.isChecked;
    }

    public set isChecked(data: boolean){
        this.__property.isChecked = data;
    }

    public get isLoading(): boolean{
        return this.__property.isLoading;
    }

    public set isLoading(data: boolean){
        this.__property.isLoading = data;
    }

    public get isShow(): boolean{
        return this.__property.isShow;
    }

    public set isShow(data: boolean){
        this.__property.isShow = data;
    }

    public get isSelect(): boolean{
        return this.__property.isSelect;
    }

    public set isSelect(data: boolean){
        this.__property.isSelect = data;
    }
}

export class ViewBasicDataProperty{
    public readonly uuid: string;
    public isActive: boolean;
    public isChecked: boolean;
    public isLoading: boolean;
    public isShow: boolean;
    public isSelect: boolean;

    constructor() {
        this.uuid = UtilTool.uuid();
        this.isActive = false;
        this.isChecked = false;
        this.isLoading = false;
        this.isShow = false;
        this.isSelect = false;
    }
}