var Authenticator = /** @class */ (function () {
    function Authenticator() {
        // Приватний конструктор, щоб заборонити зовнішній доступ
    }
    Authenticator.getInstance = function () {
        if (!Authenticator.instance) {
            Authenticator.instance = new Authenticator();
        }
        return Authenticator.instance;
    };
    // Додайте інші методи або властивості, які вам потрібні для аутентифікації
    Authenticator.prototype.authenticate = function (username, password) {
        // Логіка аутентифікації тут
        return true; // Повертаємо просто true в якості прикладу
    };
    Authenticator.instance = null;
    return Authenticator;
}());
// Приклад використання:
var authenticator1 = Authenticator.getInstance();
var authenticator2 = Authenticator.getInstance();
console.log(authenticator1 === authenticator2); // Повинно вивести true, оскільки це один і той же об'єкт
// Перевірка роботи в головному методі програми
function main() {
    var authenticator = Authenticator.getInstance();
    console.log(authenticator.authenticate('username', 'password'));
}
main(); // Викликаємо головну функцію
