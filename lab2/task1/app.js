// Перерахування для типів підписок
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
// Класи підписок
var Subscription = /** @class */ (function () {
    function Subscription(monthlyFee, minSubscriptionPeriod, channels) {
        this.monthlyFee = monthlyFee;
        this.minSubscriptionPeriod = minSubscriptionPeriod;
        this.channels = channels;
    }
    return Subscription;
}());
var DomesticSubscription = /** @class */ (function (_super) {
    __extends(DomesticSubscription, _super);
    function DomesticSubscription() {
        return _super.call(this, 10, 1, ['Basic Channels']) || this;
    }
    return DomesticSubscription;
}(Subscription));
var EducationalSubscription = /** @class */ (function (_super) {
    __extends(EducationalSubscription, _super);
    function EducationalSubscription() {
        return _super.call(this, 20, 3, ['Educational Channels']) || this;
    }
    return EducationalSubscription;
}(Subscription));
var PremiumSubscription = /** @class */ (function (_super) {
    __extends(PremiumSubscription, _super);
    function PremiumSubscription() {
        return _super.call(this, 30, 6, ['Premium Channels']) || this;
    }
    return PremiumSubscription;
}(Subscription));
var WebSite = /** @class */ (function () {
    function WebSite() {
    }
    WebSite.prototype.createSubscription = function () {
        // Логіка вибору підписки через веб-сайт
        // В даному випадку, ми можемо вивести доступні варіанти підписок та дозволити користувачу обрати
        console.log("Available subscription types:");
        console.log("1. Domestic");
        console.log("2. Educational");
        console.log("3. Premium");
        var choice = 1; // Припустимо, що користувач обрав варіант "Domestic"
        switch (choice) {
            case 1:
                return new DomesticSubscription();
            case 2:
                return new EducationalSubscription();
            case 3:
                return new PremiumSubscription();
            default:
                throw new Error('Invalid subscription type');
        }
    };
    return WebSite;
}());
var MobileApp = /** @class */ (function () {
    function MobileApp() {
    }
    MobileApp.prototype.createSubscription = function () {
        // аналогічно до класу WebSite але типу з функціоналом додатку :)
        return new EducationalSubscription(); // типу вибрали EducationalSubscription
    };
    return MobileApp;
}());
var ManagerCall = /** @class */ (function () {
    function ManagerCall() {
    }
    ManagerCall.prototype.createSubscription = function () {
        // аналогічно до  класу WebSite але типу з дзвінка до менеджера :)
        return new PremiumSubscription(); // типу вибрали EducationalSubscription PremiumSubscription(); 
    };
    return ManagerCall;
}());
// Приклад використання
function main() {
    var website = new WebSite();
    var mobileApp = new MobileApp();
    var managerCall = new ManagerCall();
    var subscription1 = website.createSubscription();
    var subscription2 = mobileApp.createSubscription();
    var subscription3 = managerCall.createSubscription();
    console.log(subscription1);
    console.log(subscription2);
    console.log(subscription3);
}
main();
