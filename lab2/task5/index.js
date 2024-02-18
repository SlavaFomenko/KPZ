// клас що представляє героя
var Hero = /** @class */ (function () {
    function Hero(height, buildType, hairColor, eyeColor, clothes, inventory) {
        this.height = height;
        this.buildType = buildType;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.clothes = clothes;
        this.inventory = inventory;
    }
    return Hero;
}());
// клас що представляє ворога
var Enemy = /** @class */ (function () {
    function Enemy(evilDeeds) {
        this.evilDeeds = evilDeeds;
    }
    return Enemy;
}());
// білдер для створення героя
var HeroBuilder = /** @class */ (function () {
    function HeroBuilder() {
        this.height = 0;
        this.buildType = '';
        this.hairColor = '';
        this.eyeColor = '';
        this.clothes = '';
        this.inventory = [];
    }
    HeroBuilder.prototype.setHeight = function (height) {
        this.height = height;
        return this;
    };
    HeroBuilder.prototype.setBuild = function (build) {
        this.buildType = build;
        return this;
    };
    HeroBuilder.prototype.setHairColor = function (color) {
        this.hairColor = color;
        return this;
    };
    HeroBuilder.prototype.setEyeColor = function (color) {
        this.eyeColor = color;
        return this;
    };
    HeroBuilder.prototype.setClothes = function (clothes) {
        this.clothes = clothes;
        return this;
    };
    HeroBuilder.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    HeroBuilder.prototype.construct = function () {
        return new Hero(this.height, this.buildType, this.hairColor, this.eyeColor, this.clothes, this.inventory);
    };
    return HeroBuilder;
}());
//білдер для створення ворога
var EnemyBuilder = /** @class */ (function () {
    function EnemyBuilder() {
        this.evilDeeds = [];
    }
    EnemyBuilder.prototype.setHeight = function (height) {
        return this;
    };
    EnemyBuilder.prototype.setBuild = function (build) {
        return this;
    };
    EnemyBuilder.prototype.setHairColor = function (color) {
        return this;
    };
    EnemyBuilder.prototype.setEyeColor = function (color) {
        return this;
    };
    EnemyBuilder.prototype.setClothes = function (clothes) {
        return this;
    };
    EnemyBuilder.prototype.setInventory = function (inventory) {
        return this;
    };
    EnemyBuilder.prototype.addEvilDeed = function (deed) {
        this.evilDeeds.push(deed);
        return this;
    };
    EnemyBuilder.prototype.construct = function () {
        return new Enemy(this.evilDeeds);
    };
    return EnemyBuilder;
}());
// директор який керує процесом створення персонажів
var CharacterDirector = /** @class */ (function () {
    function CharacterDirector(builder) {
        this.builder = builder;
    }
    CharacterDirector.prototype.constructCharacter = function () {
        return this.builder.construct();
    };
    return CharacterDirector;
}());
var heroBuilder = new HeroBuilder();
var enemyBuilder = new EnemyBuilder();
var hero = new CharacterDirector(heroBuilder
    .setHeight(180)
    .setBuild('athletic')
    .setHairColor('blonde')
    .setEyeColor('blue')
    .setClothes('armor')
    .setInventory(['sword', 'shield'])).constructCharacter();
var enemy = new CharacterDirector(enemyBuilder
    .addEvilDeed('burned down a village')
    .addEvilDeed('stole from the poor')).constructCharacter();
console.log(hero);
console.log(enemy);
