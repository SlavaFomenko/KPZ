"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, species, show, hunger) {
        if (hunger === void 0) { hunger = 0; }
        this.name = name;
        this.species = species;
        this.show = show;
        this.hunger = hunger;
    }
    // Метод для виведення стану голоду тварини
    Animal.prototype.showHunger = function () {
        console.log("".concat(this.name, " \u043C\u0430\u0454 \u0440\u0456\u0432\u0435\u043D\u044C \u0433\u043E\u043B\u043E\u0434\u0443: ").concat(this.hunger));
    };
    Animal.prototype.demonstrateShow = function () {
        if (this.hunger < 10) {
            console.log("".concat(this.name, " \u043F\u043E\u043A\u0430\u0437\u0430\u0432 \u0448\u043E\u0443: ").concat(this.show));
            this.hunger++;
        }
        else {
            console.log("".concat(this.name, " \u043D\u0435 \u0445\u043E\u0447\u0435 \u043D\u0456\u0447\u043E\u0433\u043E \u043F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 (\u0432\u0456\u043D \u0433\u043E\u043B\u043E\u0434\u043D\u0438\u0439)"));
        }
    };
    // Метод для кормлення тварини конкретним кормом
    Animal.prototype.feed = function (food) {
        if (food.type === this.species) {
            if (this.hunger > 0) {
                this.hunger--; // Знижуємо рівень голоду, якщо корм підходить для цієї тварини
                console.log("".concat(this.name, " \u0431\u0443\u043B\u043E \u043F\u043E\u043A\u043E\u0440\u043C\u043B\u0435\u043D\u043E \u0437 ").concat(food.name, "."));
                return true;
            }
            else {
                console.log("".concat(this.name, " \u043D\u0435 \u0433\u043E\u043B\u043E\u0434\u043D\u0438\u0439!"));
                return false;
            }
        }
        else {
            console.log("\u0426\u0435\u0439 \u0442\u0438\u043F \u043A\u043E\u0440\u043C\u0443 \u043D\u0435 \u043F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u0434\u043B\u044F ".concat(this.species, "!"));
            return false;
        }
        // return false
    };
    return Animal;
}());
exports.Animal = Animal;
