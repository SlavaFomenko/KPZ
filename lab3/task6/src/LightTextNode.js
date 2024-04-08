"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightTextNode = void 0;
var lightNode_1 = require("./lightNode");
var LightTextNode = /** @class */ (function (_super) {
    __extends(LightTextNode, _super);
    function LightTextNode(_text) {
        var _this = _super.call(this) || this;
        _this._text = _text;
        return _this;
    }
    LightTextNode.prototype.render = function () {
        return this._text;
    };
    Object.defineProperty(LightTextNode.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: false,
        configurable: true
    });
    return LightTextNode;
}(lightNode_1.LightNode));
exports.LightTextNode = LightTextNode;
