import { ViewBasicData } from "./view-basic-data.domain";
export declare class ViewBasicDataList<T extends ViewBasicData> extends ViewBasicData {
    private _Items;
    constructor(options?: Partial<ViewBasicDataList<T>>);
    get items(): T[];
    set items(data: T[]);
    get count(): number;
    getItem(index: number): T;
    setItem(data: T, index: number): void;
    first(): T;
    last(): T;
    append(item: T | ViewBasicDataList<T> | T[]): any;
}
