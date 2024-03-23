"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmartTextReader = /** @class */ (function () {
    function SmartTextReader() {
    }
    SmartTextReader.prototype.readTextFile = function (filename) {
        return [
            ['H', 'e', 'l', 'l', 'o'],
            ['W', 'o', 'r', 'l', 'd'],
        ];
    };
    return SmartTextReader;
}());
exports.default = SmartTextReader;
