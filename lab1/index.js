// 1. Створіть систему класів для обліку зоопарку.
// Ви можете
// створювати класи для різних видів і підвидів тварин;
// для вольєрів
// різних розмірів і типів;
// корму для тварин;
// працівників зоопарку.
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
// 2. Створіть класи інвентаризації, для виведення на екран
// інформації про наявних тварин, кількості співробітників тощо.
// Клас для тварин
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    return Animal;
}());
// Клас для підвидів тварин
var Subspecies = /** @class */ (function (_super) {
    __extends(Subspecies, _super);
    function Subspecies(name, species, subspecies) {
        var _this = _super.call(this, name, species) || this;
        _this.name = name;
        _this.species = species;
        _this.subspecies = subspecies;
        return _this;
    }
    return Subspecies;
}(Animal));
// Клас для вольєрів
var Enclosure = /** @class */ (function () {
    function Enclosure(id, size, type) {
        this.id = id;
        this.size = size;
        this.type = type;
    }
    return Enclosure;
}());
// Клас для корму
var Food = /** @class */ (function () {
    function Food(name, type) {
        this.name = name;
        this.type = type;
    }
    return Food;
}());
// Клас для працівників
var Employee = /** @class */ (function () {
    function Employee(name, position) {
        this.name = name;
        this.position = position;
    }
    return Employee;
}());
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
    return Zoo;
}());
// Приклад використання
var zoo = new Zoo('Центральний зоопарк');
var lion = new Animal('Лев', 'Ссавець');
var africanLion = new Subspecies("Африканський лев", "Ссавець", "Пантера лео");
var lionEnclosure = new Enclosure(1, 'Великий', 'Савана');
var meat = new Food("М'ясо", "М'ясоїдний");
var keeper = new Employee('Іван Петрович', 'Догляд за тваринами');
zoo.addAnimal(lion);
zoo.addAnimal(africanLion);
zoo.addEnclosure(lionEnclosure);
zoo.addFood(meat);
zoo.addEmployee(keeper);
zoo.showInventory();
