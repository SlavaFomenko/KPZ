"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LightTextNode_1 = require("./src/LightTextNode");
var LightElementNode_1 = require("./src/LightElementNode");
var tester_1 = require("./tester");
var html = tester_1.Tester.exampleUsage('book.txt');
// Обчислення розміру дерева в пам'яті
function calculateMemoryUsage(node) {
    var size = 0;
    if (node instanceof LightElementNode_1.LightElementNode) {
        size += node.tagName.length;
        size += node.displayType.length;
        size += node.closingType.length;
        size += node.cssClasses.reduce(function (acc, cls) { return acc + cls.length; }, 0);
        size += node.children.reduce(function (acc, child) { return acc + calculateMemoryUsage(child); }, 0);
    }
    else if (node instanceof LightTextNode_1.LightTextNode) {
        size += node.text.length;
    }
    return size;
}
var totalMemoryUsage = calculateMemoryUsage(html);
console.log('Total memory usage:', totalMemoryUsage, 'bytes');
console.log(html.outerHTML);
