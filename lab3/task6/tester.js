"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tester = void 0;
var fs = require("fs");
var LightElementNode_1 = require("./src/LightElementNode");
var LightTextNode_1 = require("./src/LightTextNode");
var LightElementNode_2 = require("./src/LightElementNode");
// type CSSClass = string[]
var Tester = /** @class */ (function () {
    function Tester() {
    }
    Tester.splitText = function (text) {
        return text.split('\n');
    };
    Tester.createNode = function (line) {
        var textNode = new LightTextNode_1.LightTextNode(line);
        var tagName = 'p';
        if (line.trim().length === 0) {
            tagName = 'p';
        }
        else if (line.trim().length < 20) {
            tagName = 'h2';
        }
        else if (line.startsWith(' ')) {
            tagName = 'blockquote';
        }
        var emptyCSSClasses = LightElementNode_2.CSSClasses.getInstance([]);
        return new LightElementNode_1.LightElementNode(tagName, 'block', 'double', emptyCSSClasses, // Передаем пустой экземпляр CSSClasses
        [textNode]);
    };
    Tester.readTextFromFile = function (filePath) {
        return fs.readFileSync(filePath, 'utf-8');
    };
    Tester.createBodyNode = function (nodes) {
        var cssClasses = nodes
            .map(function (node) {
            if (node instanceof LightElementNode_1.LightElementNode) {
                return node.cssClasses.classes; // Получаем классы из каждого узла
            }
            return [];
        })
            .flat(); // Объединяем массивы классов в один массив
        return new LightElementNode_1.LightElementNode('body', 'block', 'double', LightElementNode_2.CSSClasses.getInstance(cssClasses), nodes);
    };
    Tester.createHtmlNode = function (body) {
        var cssClasses = [];
        if (body instanceof LightElementNode_1.LightElementNode) {
            cssClasses.push.apply(cssClasses, body.cssClasses.classes); // Получаем классы из body
        }
        return new LightElementNode_1.LightElementNode('html', 'block', 'double', LightElementNode_2.CSSClasses.getInstance(cssClasses), [body]);
    };
    Tester.exampleUsage = function (filePath) {
        var bookText = Tester.readTextFromFile(filePath);
        var lines = Tester.splitText(bookText);
        var nodes = lines.map(function (line) { return Tester.createNode(line); });
        var body = Tester.createBodyNode(nodes);
        var html = Tester.createHtmlNode(body);
        return html;
    };
    return Tester;
}());
exports.Tester = Tester;
