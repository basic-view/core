"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewBasicDataList = void 0;
var view_basic_data_domain_1 = require("./view-basic-data.domain");
var enums_1 = require("../enums");
var ViewBasicDataList = /** @class */ (function (_super) {
    __extends(ViewBasicDataList, _super);
    function ViewBasicDataList(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this._Items = [];
        return _this;
    }
    Object.defineProperty(ViewBasicDataList.prototype, "items", {
        get: function () {
            return this._Items;
        },
        set: function (data) {
            this._Items = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewBasicDataList.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    ViewBasicDataList.prototype.getItem = function (index) {
        return this.items[index];
    };
    ViewBasicDataList.prototype.setItem = function (data, index) {
        this.items[index] = data;
    };
    ViewBasicDataList.prototype.first = function () {
        return this.getItem(0);
    };
    ViewBasicDataList.prototype.last = function () {
        return this.getItem(this.count - 1);
    };
    ViewBasicDataList.prototype.append = function (item) {
        var _a;
        if (!item) {
            return;
        }
        if (item instanceof ViewBasicDataList) {
            return this.append(item._Items);
        }
        else if (Object.prototype.toString.call(item) === enums_1.BasicDataType.ARRAY_CLASS) {
            // @ts-ignore
            (_a = this._Items).push.apply(_a, __spread(item));
        }
        else {
            // @ts-ignore
            this._Items.push(item);
        }
        return this;
    };
    return ViewBasicDataList;
}(view_basic_data_domain_1.ViewBasicData));
exports.ViewBasicDataList = ViewBasicDataList;
//# sourceMappingURL=view-basic-data-list.domain.js.map