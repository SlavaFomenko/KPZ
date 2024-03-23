"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmartTextChecker = /** @class */ (function () {
    function SmartTextChecker(reader) {
        this.reader = reader;
    }
    SmartTextChecker.prototype.readTextFile = function (filename) {
        console.log('Opening file:', filename);
        var content = this.reader.readTextFile(filename);
        console.log('File read successfully.');
        console.log('Total lines:', content.length);
        console.log('Total characters:', content.reduce(function (acc, line) { return acc + line.length; }, 0));
        console.log('Closing file:', filename);
        return content;
    };
    return SmartTextChecker;
}());
exports.default = SmartTextChecker;
