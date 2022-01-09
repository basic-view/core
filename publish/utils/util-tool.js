"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilTool = void 0;
var enums_1 = require("../enums");
var UtilTool = /** @class */ (function () {
    function UtilTool() {
    }
    UtilTool.uuid = function () {
        function createRandom() {
            return (((Math.random() + 1) * 0x10000) | 0).toString(16).substring(1);
        }
        return createRandom() + createRandom() + '-' + createRandom() + createRandom() + createRandom() + '-' + createRandom() + createRandom();
    };
    UtilTool.isArray = function (data) {
        var type = Object.prototype.toString.call(data);
        return type === enums_1.BasicDataType.ARRAY_CLASS;
    };
    UtilTool.isString = function (data) {
        var type = Object.prototype.toString.call(data);
        return type === enums_1.BasicDataType.STRING_CLASS;
    };
    UtilTool.isDate = function (data) {
        var type = Object.prototype.toString.call(data);
        return type === enums_1.BasicDataType.DATE_CLASS;
    };
    UtilTool.transformType = function (value, domainType, genericType) {
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
    };
    UtilTool.transformType_String = function (value) {
        return value || '';
    };
    UtilTool.transformType_Number = function (value) {
        return !value ? 0 : Number.parseFloat(value.toString());
    };
    UtilTool.transformType_Date = function (value) {
        if (!value) {
            return;
        }
        if (typeof value === 'string') {
            value = value.replace(/T/g, ' ');
            if (value === '0001-01-01 00:00:00') {
                return;
            }
            var dateArr = value.match(/\d+/g).map(function (item) { return Number.parseInt(item, 10); });
            value = new Date(dateArr[0], dateArr[1] - 1, dateArr[2], dateArr[3] || 0, dateArr[4] || 0, dateArr[5] || 0);
        }
        if (value.getTime() < -2209017600000) {
            return;
        }
        return value;
    };
    UtilTool.transformType_Boolean = function (value) {
        return !!value;
    };
    UtilTool.transformType_Array = function (value, genericType) {
        var _this = this;
        if (!value) {
            return [];
        }
        if (!genericType) {
            return value;
        }
        switch (genericType) {
            case Date:
                return value.map(function (item) { return _this.transformType_Date(item); });
            case String:
                return value.map(function (item) { return _this.transformType_String(item); });
            case Number:
                return value.map(function (item) { return _this.transformType_Number(item); });
            case Boolean:
                return value.map(function (item) { return _this.transformType_Boolean(item); });
            default:
                return value.map(function (item) { return new genericType(item); });
        }
    };
    return UtilTool;
}());
exports.UtilTool = UtilTool;
//# sourceMappingURL=util-tool.js.map