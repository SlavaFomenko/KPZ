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
exports.Subspecies = void 0;
var Animal_1 = require("./Animal");
var Subspecies = /** @class */ (function (_super) {
    __extends(Subspecies, _super);
    function Subspecies(name, species, subspecies, show, hunger) {
        if (hunger === void 0) { hunger = 0; }
        var _this = _super.call(this, name, species, show, hunger) || this;
        _this.name = name;
        _this.species = species;
        _this.subspecies = subspecies;
        _this.show = show;
        _this.hunger = hunger;
        return _this;
    }
    return Subspecies;
}(Animal_1.Animal));
exports.Subspecies = Subspecies;
