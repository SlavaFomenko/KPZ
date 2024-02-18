var Virus = /** @class */ (function () {
    function Virus(weight, age, name, species, children) {
        if (children === void 0) { children = []; }
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.species = species;
        this.children = children;
    }
    Virus.prototype.clone = function () {
        var clonedChildren = this.children.map(function (child) { return child.clone(); });
        return new Virus(this.weight, this.age, this.name, this.species, clonedChildren);
    };
    Virus.prototype.toString = function () {
        console.log("Name ".concat(this.name));
    };
    return Virus;
}());
// Створення вірусів
var grandchild1 = new Virus(0.1, 1, "Grandchild 1", "Coronavirus");
var grandchild2 = new Virus(0.2, 1, "Grandchild 2", "Coronavirus");
var child1 = new Virus(0.5, 2, "Child 1", "Coronavirus", [grandchild1, grandchild2]);
var child2 = new Virus(0.6, 2, "Child 2", "Coronavirus");
var parentVirus = new Virus(1.2, 5, "Parent", "Coronavirus", [child1, child2]);
// Клонування вірусів
var clonedParent = parentVirus.clone();
// Перевірка результатів
console.dir(clonedParent);
clonedParent.children.forEach(function (virus) {
    virus.toString();
});
