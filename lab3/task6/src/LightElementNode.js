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
exports.CSSClasses = exports.LightElementNode = void 0;
// lightElementNode.ts
var lightNode_1 = require("./lightNode");
// Класс для хранения информации о классах CSS
var CSSClasses = /** @class */ (function () {
    function CSSClasses(_classes) {
        this._classes = _classes;
    }
    // Создание или получение экземпляра класса CSSClasses
    CSSClasses.getInstance = function (classes) {
        var key = classes.join(' ');
        if (!CSSClasses.classesMap[key]) {
            CSSClasses.classesMap[key] = new CSSClasses(classes);
        }
        return CSSClasses.classesMap[key];
    };
    Object.defineProperty(CSSClasses.prototype, "classes", {
        get: function () {
            return this._classes;
        },
        enumerable: false,
        configurable: true
    });
    CSSClasses.classesMap = {};
    return CSSClasses;
}());
exports.CSSClasses = CSSClasses;
var LightElementNode = /** @class */ (function (_super) {
    __extends(LightElementNode, _super);
    function LightElementNode(_tagName, _displayType, _closingType, _cssClasses, _children) {
        var _this = _super.call(this) || this;
        _this._tagName = _tagName;
        _this._displayType = _displayType;
        _this._closingType = _closingType;
        _this._cssClasses = _cssClasses;
        _this._children = _children;
        return _this;
    }
    LightElementNode.prototype.render = function () {
        var attributes = this._cssClasses.classes.length > 0
            ? "class=\"".concat(this._cssClasses.classes.join(' '), "\"")
            : '';
        var openingTag = "<".concat(this.tagName, " ").concat(attributes, ">");
        var closingTag = this._closingType === 'single' ? '/' : "</".concat(this.tagName, ">");
        var innerHTML = this.innerHTML;
        return "".concat(openingTag).concat(innerHTML).concat(closingTag);
    };
    Object.defineProperty(LightElementNode.prototype, "outerHTML", {
        get: function () {
            return this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightElementNode.prototype, "innerHTML", {
        get: function () {
            return this._children.map(function (child) { return child.render(); }).join('');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightElementNode.prototype, "tagName", {
        get: function () {
            return this._tagName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightElementNode.prototype, "displayType", {
        get: function () {
            return this._displayType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightElementNode.prototype, "closingType", {
        get: function () {
            return this._closingType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightElementNode.prototype, "cssClasses", {
        get: function () {
            return this._cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightElementNode.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    return LightElementNode;
}(lightNode_1.LightNode));
exports.LightElementNode = LightElementNode;
