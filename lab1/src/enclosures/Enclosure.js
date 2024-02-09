"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, position) {
        this.name = name;
        this.position = position;
    }
    Employee.prototype.feedAnimal = function (animal, food) {
        // Перевірка, чи корм підходить для виду тварини
        if (food.type === animal.species) {
            // Кормлення тварини
            if (animal.feed(food)) {
                console.log("".concat(this.name, " \u043F\u043E\u043A\u043E\u0440\u043C\u0438\u0432 \u0442\u0432\u0430\u0440\u0438\u043D\u0443 ").concat(animal.name, " \u0437 ").concat(food.name, "."));
                return true;
            }
            else {
                console.log("".concat(this.name, ", \u0442\u0432\u0430\u0440\u0438\u043D\u0430 ").concat(animal.name, " \u043D\u0435 \u0433\u043E\u043B\u043E\u0434\u043D\u0430!"));
                return false;
            }
        }
        else {
            console.log("".concat(this.name, ", \u0446\u0435\u0439 \u0442\u0438\u043F \u043A\u043E\u0440\u043C\u0443 \u043D\u0435 \u043F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D\u0438 ").concat(animal.species, "."));
            return false;
        }
    };
    return Employee;
}());
exports.Employee = Employee;
