import {ViewBasicData} from "./view-basic-data.domain";
import {BasicDataType} from "../enums";

export class ViewBasicDataList<T extends ViewBasicData> extends ViewBasicData{
    private _Items: T[];
    constructor(options: Partial<ViewBasicDataList<T>> = {}) {
        super();
        this._Items = [];
    }

    get items(): T[]{
        return this._Items;
    }

    set items(data: T[]) {
        this._Items = data;
    }

    get count(): number{
        return this.items.length;
    }

    public getItem(index: number): T{
        return this.items[index];
    }

    public setItem(data: T, index: number){
        this.items[index] = data;
    }

    public first(): T{
        return this.getItem(0);
    }

    public last(): T{
        return this.getItem(this.count - 1);
    }

    public append(item: T | ViewBasicDataList<T> | T[]): any{
        if(!item){
            return;
        }

        if(item instanceof ViewBasicDataList){
            return this.append(item._Items);
        } else if (Object.prototype.toString.call(item) === BasicDataType.ARRAY_CLASS) {
            // @ts-ignore
            this._Items.push(...item);
        } else{
            // @ts-ignore
            this._Items.push(item);
        }
        return this;
    }
}