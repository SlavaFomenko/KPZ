"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = void 0;
// Клас для корму
var Food_1 = require("../animals/Food");
// Клас для підвидів тварин
var Subspecies_1 = require("../animals/Subspecies");
// Клас для працівників
var Employee_1 = require("../employees/Employee");
// Клас для вольєрів
var Enclosure_1 = require("../enclosures/Enclosure");
// Клас для зоопарку
var Zoo = /** @class */ (function () {
    function Zoo(name) {
        this.name = name;
        this.animals = [];
        this.enclosures = [];
        this.foods = [];
        this.employees = [];
    }
    // Додати тварину до зоопарку
    Zoo.prototype.addAnimal = function (animal) {
        this.animals.push(animal);
    };
    // Метод для кормлення тварини в зоопарку
    Zoo.prototype.hasFood = function (foodName, foodType) {
        return this.foods.some(function (food) { return food.name === foodName && food.type === foodType; });
    };
    // Метод для кормлення тварини в зоопарку з перевіркою наявності корму
    Zoo.prototype.feedAnimal = function (keeper, animalName, food) {
        var foundAnimal;
        for (var i = 0; i < this.animals.length; i++) {
            if (this.animals[i].name === animalName) {
                foundAnimal = this.animals[i];
                break;
            }
        }
        if (foundAnimal) {
            if (this.hasFood(food.name, food.type)) {
                if (keeper.feedAnimal(foundAnimal, food)) {
                    var index = this.foods.indexOf(food);
                    if (index !== -1) {
                        this.foods.splice(index, 1); // Видаляємо корм зі списку
                    }
                }
            }
            else {
                console.log("\u041A\u043E\u0440\u043C ".concat(food.name, " \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0456 \u0443 \u0437\u043E\u043E\u043F\u0430\u0440\u043A\u0443."));
            }
        }
        else {
            console.log("\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0437 \u0456\u043C'\u044F\u043C ".concat(animalName, " \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u0432 \u0437\u043E\u043E\u043F\u0430\u0440\u043A\u0443."));
        }
    };
    // Додати вольєр до зоопарку
    Zoo.prototype.addEnclosure = function (enclosure) {
        this.enclosures.push(enclosure);
    };
    // Додати корм до зоопарку
    Zoo.prototype.addFood = function (food) {
        this.foods.push(food);
    };
    // Додати працівника до зоопарку
    Zoo.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    // Показати інвентаризацію зоопарку
    Zoo.prototype.showInventory = function () {
        console.log("\u0417\u043E\u043E\u043F\u0430\u0440\u043A: ".concat(this.name));
        console.log("\u0422\u0432\u0430\u0440\u0438\u043D\u0438: ".concat(this.animals.length));
        console.log("\u0412\u043E\u043B\u044C\u0454\u0440\u0438: ".concat(this.enclosures.length));
        console.log("\u041A\u043E\u0440\u043C: ".concat(this.foods.length));
        console.log("\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438: ".concat(this.employees.length));
    };
    //Додавання тварин у вольєри
    Zoo.prototype.enclosureAddAnimal = function (enclosureId, animal) {
        // const enclosure = this.enclosures.find(enc => enc.id === enclosureId);  так не виходить ругається Property 'find' does not exist on type 'Enclosure[]'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later
        var enclosure;
        for (var i = 0; i < this.enclosures.length; i++) {
            if (this.enclosures[i].id === enclosureId) {
                enclosure = this.enclosures[i];
                break;
            }
        }
        if (enclosure) {
            if (enclosure.animals.length < enclosure.size) {
                enclosure.animals.push(animal);
                console.log("".concat(animal.name, " \u0431\u0443\u043B\u043E \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0432\u043E\u043B\u044C\u0454\u0440\u0443 ").concat(enclosureId, "."));
            }
            else {
                console.log('Вольєр вже заповнений.');
            }
        }
        else {
            console.log("\u0412\u043E\u043B\u044C\u0454\u0440 \u0437 id ".concat(enclosureId, " \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E."));
        }
    };
    Zoo.prototype.app = function () {
        var leo = new Subspecies_1.Subspecies('Лео', "М'ясоїдний", 'Тигр', 'Ричить');
        var umka = new Subspecies_1.Subspecies('Умка', "М'ясоїдний", 'Тигр', 'Ричить');
        var lemur = new Subspecies_1.Subspecies('Джуліан', 'Ссавець', 'Лемур плямистий', 'Танцює');
        var lionEnclosure = new Employee_1.Enclosure(1, 3, 'Савана');
        var meat = new Food_1.Food("М'ясо", "М'ясоїдний");
        var keeper = new Enclosure_1.Employee('Іван Петрович', 'Догляд за тваринами');
        lionEnclosure.animals = [leo, umka];
        this.addAnimal(leo);
        this.addAnimal(lemur);
        // this.addAnimal(leo)
        this.addEnclosure(lionEnclosure);
        this.addFood(meat);
        this.addEmployee(keeper);
        leo.showHunger();
        leo.demonstrateShow();
        leo.showHunger();
        this.feedAnimal(keeper, 'Лео', meat);
        // leo.showHunger()
        umka.demonstrateShow();
        lionEnclosure.showAnimals();
    };
    return Zoo;
}());
exports.Zoo = Zoo;
