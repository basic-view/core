"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewBasicDataProperty = exports.ViewBasicData = void 0;
var utils_1 = require("../utils");
var ViewBasicData = /** @class */ (function () {
    function ViewBasicData() {
        this.__property = new ViewBasicDataProperty();
    }
    Object.defineProperty(ViewBasicData.prototype, "uuid", {
        get: function () {
            return this.__property.uuid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewBasicData.prototype, "isActive", {
        get: function () {
            return this.__property.isActive;
        },
        set: function (data) {
            this.__property.isActive = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewBasicData.prototype, "isChecked", {
        get: function () {
            return this.__property.isChecked;
        },
        set: function (data) {
            this.__property.isChecked = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewBasicData.prototype, "isLoading", {
        get: function () {
            return this.__property.isLoading;
        },
        set: function (data) {
            this.__property.isLoading = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewBasicData.prototype, "isShow", {
        get: function () {
            return this.__property.isShow;
        },
        set: function (data) {
            this.__property.isShow = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewBasicData.prototype, "isSelect", {
        get: function () {
            return this.__property.isSelect;
        },
        set: function (data) {
            this.__property.isSelect = data;
        },
        enumerable: false,
        configurable: true
    });
    return ViewBasicData;
}());
exports.ViewBasicData = ViewBasicData;
var ViewBasicDataProperty = /** @class */ (function () {
    function ViewBasicDataProperty() {
        this.uuid = utils_1.UtilTool.uuid();
        this.isActive = false;
        this.isChecked = false;
        this.isLoading = false;
        this.isShow = false;
        this.isSelect = false;
    }
    return ViewBasicDataProperty;
}());
exports.ViewBasicDataProperty = ViewBasicDataProperty;
//# sourceMappingURL=view-basic-data.domain.js.map