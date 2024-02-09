"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enclosure = void 0;
var Enclosure = /** @class */ (function () {
    function Enclosure(id, size, type, animals) {
        var _this = this;
        this.id = id;
        this.size = size;
        this.type = type;
        this._animals = [];
        this.showAnimals = function () {
            console.log("\u0412 \u0432\u043E\u043B\u044C\u0454\u0440\u0456 ".concat(_this.id, " \u0437\u043D\u0430\u0445\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u0442\u0430\u043A\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438."));
            _this.animals.forEach(function (animal, i) {
                console.log("".concat(i + 1, ". ").concat(animal.name, " \u0433\u043E\u043B\u043E\u0434\u043D\u0438\u0439 \u043D\u0430 ").concat(animal.hunger));
            });
        };
        if (animals) {
            animals.forEach(function (animal) { return _this._animals.push(animal); });
        }
    }
    Object.defineProperty(Enclosure.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        set: function (animals) {
            if (this.animals.length <= this.size) {
                this._animals = animals;
            }
            else {
                console.log('Вольєр вже заповненний');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Enclosure;
}());
exports.Enclosure = Enclosure;
