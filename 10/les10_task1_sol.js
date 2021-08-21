// задание№1 урока 10
// https://www.youtube.com/watch?v=D-3D1tnF4nU&list=PLcxinMQ6yB5QDMQqMXZiY5E1W0ZVBSadk&index=10&t=4863s
//
// http://web.archive.org/web/20190405104458/http://learn.javascript.ru/classes#tasks
// Есть класс CoffeeMachine, заданный в функциональном стиле.
// Задача: переписать CoffeeMachine в виде класса с использованием прототипа.

/*
function CoffeeMachine(power) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.run = function() {
        setTimeout(function() {
            alert( 'Кофе готов!' );
        }, getTimeToBoil());
    };

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

*/

// РЕШЕНИЕ /////////////////////////////////////////////////
// https://www.youtube.com/watch?v=D-3D1tnF4nU&list=PLcxinMQ6yB5QDMQqMXZiY5E1W0ZVBSadk&index=11&t=4863s

function CoffeeMachine(power) {
    // свойства конкретной кофеварки
    this._power = power;
    this._waterAmount = 0;
    this._WATER_HEAT_CAPACITY = 4200; // CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
}

// свойства и методы для всех объектов класса


CoffeeMachine.prototype._getTimeToBoil = function() {
    return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.run = function() {
    setTimeout(function() { // setTimeout (func,time) запускает фукцию с определенной задержкой
        console.log( 'Кофе готов!' );
    }, this._getTimeToBoil());
    console.log(this._getTimeToBoil()); // исполняется раньше чем то что задержано setTimeout
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();