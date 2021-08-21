// задание№1 урока 10
// https://www.youtube.com/watch?v=D-3D1tnF4nU&list=PLcxinMQ6yB5QDMQqMXZiY5E1W0ZVBSadk&index=10&t=4863s
//
// http://web.archive.org/web/20190405104458/http://learn.javascript.ru/classes#tasks
// Есть класс CoffeeMachine, заданный в функциональном стиле.
// Задача: переписать CoffeeMachine в виде класса с использованием прототипа.

function CoffeeMachine(power) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.run = function() {
        setTimeout(function() {  // setTimeout (func,time) запускает фукцию с определенной задержкой
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

