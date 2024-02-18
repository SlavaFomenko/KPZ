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
// Абстрактні класи для продуктів
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    return Laptop;
}());
var Netbook = /** @class */ (function () {
    function Netbook() {
    }
    return Netbook;
}());
var EBook = /** @class */ (function () {
    function EBook() {
    }
    return EBook;
}());
var Smartphone = /** @class */ (function () {
    function Smartphone() {
    }
    return Smartphone;
}());
// Абстрактні фабрики
var TechFactory = /** @class */ (function () {
    function TechFactory() {
    }
    return TechFactory;
}());
// Фабрика для бренду IProne
var IProneFactory = /** @class */ (function (_super) {
    __extends(IProneFactory, _super);
    function IProneFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IProneFactory.prototype.createLaptop = function () {
        return new IProneLaptop();
    };
    IProneFactory.prototype.createNetbook = function () {
        return new IProneNetbook();
    };
    IProneFactory.prototype.createEBook = function () {
        return new IProneEBook();
    };
    IProneFactory.prototype.createSmartphone = function () {
        return new IProneSmartphone();
    };
    return IProneFactory;
}(TechFactory));
// Фабрика для бренду Kiaomi
var KiaomiFactory = /** @class */ (function (_super) {
    __extends(KiaomiFactory, _super);
    function KiaomiFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KiaomiFactory.prototype.createLaptop = function () {
        return new KiaomiLaptop();
    };
    KiaomiFactory.prototype.createNetbook = function () {
        return new KiaomiNetbook();
    };
    KiaomiFactory.prototype.createEBook = function () {
        return new KiaomiEBook();
    };
    KiaomiFactory.prototype.createSmartphone = function () {
        return new KiaomiSmartphone();
    };
    return KiaomiFactory;
}(TechFactory));
// Фабрика для бренду Balaxy
var BalaxyFactory = /** @class */ (function (_super) {
    __extends(BalaxyFactory, _super);
    function BalaxyFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BalaxyFactory.prototype.createLaptop = function () {
        return new BalaxyLaptop();
    };
    BalaxyFactory.prototype.createNetbook = function () {
        return new BalaxyNetbook();
    };
    BalaxyFactory.prototype.createEBook = function () {
        return new BalaxyEBook();
    };
    BalaxyFactory.prototype.createSmartphone = function () {
        return new BalaxySmartphone();
    };
    return BalaxyFactory;
}(TechFactory));
// Конкретні класи продуктів для бренду IProne
var IProneLaptop = /** @class */ (function (_super) {
    __extends(IProneLaptop, _super);
    function IProneLaptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IProneLaptop.prototype.display = function () {
        console.log("IProne Laptop");
    };
    return IProneLaptop;
}(Laptop));
var IProneNetbook = /** @class */ (function (_super) {
    __extends(IProneNetbook, _super);
    function IProneNetbook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IProneNetbook.prototype.display = function () {
        console.log("IProne Netbook");
    };
    return IProneNetbook;
}(Netbook));
var IProneEBook = /** @class */ (function (_super) {
    __extends(IProneEBook, _super);
    function IProneEBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IProneEBook.prototype.display = function () {
        console.log("IProne EBook");
    };
    return IProneEBook;
}(EBook));
var IProneSmartphone = /** @class */ (function (_super) {
    __extends(IProneSmartphone, _super);
    function IProneSmartphone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IProneSmartphone.prototype.display = function () {
        console.log("IProne Smartphone");
    };
    return IProneSmartphone;
}(Smartphone));
// Конкретні класи продуктів для бренду Kiaomi
var KiaomiLaptop = /** @class */ (function (_super) {
    __extends(KiaomiLaptop, _super);
    function KiaomiLaptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KiaomiLaptop.prototype.display = function () {
        console.log("Kiaomi Laptop");
    };
    return KiaomiLaptop;
}(Laptop));
var KiaomiNetbook = /** @class */ (function (_super) {
    __extends(KiaomiNetbook, _super);
    function KiaomiNetbook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KiaomiNetbook.prototype.display = function () {
        console.log("Kiaomi Netbook");
    };
    return KiaomiNetbook;
}(Netbook));
var KiaomiEBook = /** @class */ (function (_super) {
    __extends(KiaomiEBook, _super);
    function KiaomiEBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KiaomiEBook.prototype.display = function () {
        console.log("Kiaomi EBook");
    };
    return KiaomiEBook;
}(EBook));
var KiaomiSmartphone = /** @class */ (function (_super) {
    __extends(KiaomiSmartphone, _super);
    function KiaomiSmartphone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KiaomiSmartphone.prototype.display = function () {
        console.log("Kiaomi Smartphone");
    };
    return KiaomiSmartphone;
}(Smartphone));
// Конкретні класи продуктів для бренду Balaxy
var BalaxyLaptop = /** @class */ (function (_super) {
    __extends(BalaxyLaptop, _super);
    function BalaxyLaptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BalaxyLaptop.prototype.display = function () {
        console.log("Balaxy Laptop");
    };
    return BalaxyLaptop;
}(Laptop));
var BalaxyNetbook = /** @class */ (function (_super) {
    __extends(BalaxyNetbook, _super);
    function BalaxyNetbook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BalaxyNetbook.prototype.display = function () {
        console.log("Balaxy Netbook");
    };
    return BalaxyNetbook;
}(Netbook));
var BalaxyEBook = /** @class */ (function (_super) {
    __extends(BalaxyEBook, _super);
    function BalaxyEBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BalaxyEBook.prototype.display = function () {
        console.log("Balaxy EBook");
    };
    return BalaxyEBook;
}(EBook));
var BalaxySmartphone = /** @class */ (function (_super) {
    __extends(BalaxySmartphone, _super);
    function BalaxySmartphone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BalaxySmartphone.prototype.display = function () {
        console.log("Balaxy Smartphone");
    };
    return BalaxySmartphone;
}(Smartphone));
// Головний метод програми
function main() {
    var iproneFactory = new IProneFactory();
    var kiaomiFactory = new KiaomiFactory();
    var balaxyFactory = new BalaxyFactory();
    // Створення продуктів для бренду IProne
    var iproneLaptop = iproneFactory.createLaptop();
    iproneLaptop.display();
    var iproneNetbook = iproneFactory.createNetbook();
    iproneNetbook.display();
    var iproneEBook = iproneFactory.createEBook();
    iproneEBook.display();
    var iproneSmartphone = iproneFactory.createSmartphone();
    iproneSmartphone.display();
    // Створення продуктів для бренду Kiaomi
    var kiaomiLaptop = kiaomiFactory.createLaptop();
    kiaomiLaptop.display();
    var kiaomiNetbook = kiaomiFactory.createNetbook();
    kiaomiNetbook.display();
    var kiaomiEBook = kiaomiFactory.createEBook();
    kiaomiEBook.display();
    var kiaomiSmartphone = kiaomiFactory.createSmartphone();
    kiaomiSmartphone.display();
    // Створення продуктів для бренду Balaxy
    var balaxyLaptop = balaxyFactory.createLaptop();
    balaxyLaptop.display();
    var balaxyNetbook = balaxyFactory.createNetbook();
    balaxyNetbook.display();
    var balaxyEBook = balaxyFactory.createEBook();
    balaxyEBook.display();
    var balaxySmartphone = balaxyFactory.createSmartphone();
    balaxySmartphone.display();
}
// Виклик головного методу програми
main();
