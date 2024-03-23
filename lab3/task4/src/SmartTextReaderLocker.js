"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmartTextReaderLocker = /** @class */ (function () {
    function SmartTextReaderLocker(reader, restrictedFilesRegex) {
        this.reader = reader;
        this.restrictedFilesRegex = new RegExp(restrictedFilesRegex);
    }
    SmartTextReaderLocker.prototype.readTextFile = function (filename) {
        if (this.restrictedFilesRegex.test(filename)) {
            console.log("Access denied!");
            return [];
        }
        else {
            return this.reader.readTextFile(filename);
        }
    };
    return SmartTextReaderLocker;
}());
exports.default = SmartTextReaderLocker;
