/*var user = {
    name: 'Василий',
    // метод
    sayHi: function() {
        console.log( 'Привет!' );
    }
};
// Вызов
user.sayHi();*/

/*
var user = {
    name: 'Василий'
};

user.sayHi = function() { // присвоили метод после создания объекта
    console.log('Привет!');
};

// Вызов метода:
user.sayHi();
*/
/*
var user = {
    name: 'Василий',

    sayHi: function() {
        console.log( user.name ); // приведёт к ошибке
    }
};

var admin = user;
user = null;

admin.sayHi(); // упс! внутри sayHi обращение по старому имени, ошибка!*/
/*var user = { firstName: "Вася" };
var admin = { firstName: "Админ" };

function func() {
    console.log( this.firstName );
}

user.f = func;
admin.g = func;

// this равен объекту перед точкой:
user.f(); // Вася
admin.g(); // Админ
admin['g'](); // Админ (не важно, доступ к объекту через точку или квадратные скобки)*/
/*function func() {
    console.log( this ); // выведет [object Window] или [object global]
}

func();*/
/*function func() {
    "use strict";
    console.log( this ); // выведет undefined (кроме IE9-)
}

func();*/

/*function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

var user = {
    firstName: "Василий",
    lastName: "Петров"
};

// функция вызовется с this=user
showFullName.call(user) // "Василий Петров"*/

/*var user = {
    firstName: "Василий",
    surname: "Петров",
    patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
    console.log( this[firstPart] + " " + this[lastPart] );
}
// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
showFullName.apply(user, ['firstName', 'patronym']) // "Василий Иванович"*/

//Классы

/*function Person(name) {
    this.name = name;
    this.hasBrains = true;

    this.showName = function() {
        console.log(this.name);
    }
}
var vasya = new Person('Vasya');
vasya.hasBrains;
vasya.showName();*/

/*Практическое задание 1:
Создать класс Cat. Добавить ему свойство - name, которое будем получать при создании объекта класса, и пока пустой
метод feed. Создать объект класса Cat, вывести в консоль его имя и затем удалить объект.*/
/*function Cat(name) {
    this.name = name;

    this.feed = function() {
    }
}
var marsi = new Cat('Marsi');

console.log(marsi.name);

marsi = null;
console.log(marsi);*/

/*function CoffeeMachine(power) {
    this.waterAmount = 0; // количество воды в кофеварке

    console.log( 'Создана кофеварка мощностью: ' + power + ' ватт' );
}

// создать кофеварку
var coffeeMachine = new CoffeeMachine(100);

// залить воды
coffeeMachine.waterAmount = 200;*/

/*function CoffeeMachine(power) {

    this.waterAmount = 0;

    // расчёт времени для кипячения
    function getBoilTime() {
        return 1000; // точная формула расчёта будет позже
    }

    // что делать по окончании процесса
    function onReady() {
        console.log( 'Кофе готов!' );
    }

    this.run = function() {
        // setTimeout - встроенная функция,
        // она запустит onReady через getBoilTime() миллисекунд
        setTimeout(onReady, getBoilTime());
    };
}

var coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();*/

/*function CoffeeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log( 'Кофе готов!' );
    }

    this.run = function() {
        setTimeout(onReady, getBoilTime());
    };

}

var coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();*/

/*ФУНКЦИОНАЛЬНЫЙ СТИЛЬ ООП
Геттеры и сеттеры:
    - https://learn.javascript.ru/getters-setters
Для лучшего контроля над свойством его делают приватным, а запись значения осуществляется через специальный метод, который называют «сеттер» (setter method).

Типичное название для сеттера – setСвойство, например, в случае с кофеваркой таким сеттером будет метод setWaterAmount:*/
/*function CoffeeMachine(power, capacity) { // capacity - ёмкость кофеварки
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    // "умная" установка свойства
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(1000, 500);
coffeeMachine.setWaterAmount(600); // упс, ошибка!
Теперь waterAmount – внутреннее свойство, его можно записать (через сеттер), но, увы, нельзя прочитать.

    Для того, чтобы дать возможность внешнему коду узнать его значение, создадим специальную функцию – «геттер» (getter method).

Геттеры обычно имеют название вида getСвойство, в данном случае getWaterAmount:
    function CoffeeMachine(power, capacity) {
        //...
        this.setWaterAmount = function(amount) {
            if (amount < 0) {
                throw new Error("Значение должно быть положительным");
            }
            if (amount > capacity) {
                throw new Error("Нельзя залить воды больше, чем " + capacity);
            }

            waterAmount = amount;
        };

        this.getWaterAmount = function() {
            return waterAmount;
        };
    }

var coffeeMachine = new CoffeeMachine(1000, 500);
coffeeMachine.setWaterAmount(450);
alert( coffeeMachine.getWaterAmount() ); // 450

Единый геттер-сеттер

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    this.waterAmount = function(amount) {
        // вызов без параметра, значит режим геттера, возвращаем свойство
        if (!arguments.length) return waterAmount;

        // иначе режим сеттера
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

}

var coffeeMachine = new CoffeeMachine(1000, 500);

// пример использования
coffeeMachine.waterAmount(450);
alert( coffeeMachine.waterAmount() ); // 450*/

/*Практическое задание 2:
Добавить в класс Cat приватное свойство foodAmount, равное 50, и приватный метод formatFoodAmount, который
будет возвращать это свойство + слово 'гр.'. В методе feed необходимо выводить в консоль информацию вида:
    "Насыпаем в миску (количество гр.) корма."
"Количество гр." получаем с помощью метода formatFoodAmount.
    Вывести в консоль результат выполнения метода feed.*/

function Cat(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);
console.log(barsik.feed());

/*Написать единый геттер-сеттер dailyNorm для установки/получения количества корма (foodAmount).
    Оно не должно быть меньше 50 и больше 500 грамм. В случае некорректного количества возвращать сообщение об ошибке.
    Если функция вызывается как геттер - она должна возвращать уже отформатированное значение foodAmount.
    Протестировать метод dailyNorm с разными значениями параметра и без него. Метод feed должен оперировать актуальной
информацией (использовать внутри метода вызов геттера).*/

function Cat(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.name = name;

    this.dailyNorm = function(amount) {
        if(!arguments.length) return formatFoodAmount();

        if(amount < 50) {
            throw new Error('Количество должно быть больше 50');
        }
        if (amount > 500) {
            throw new Error('Количество должно быть меньше 500');
        }
        foodAmount = amount;
    }
    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(360);

console.log(barsik.name);
console.log(barsik.feed());

Функциональное наследование, расширение метода родителя:
    - https://learn.javascript.ru/functional-inheritance

/*Создать класс Animal. Перенести в него все свойства и методы. Отнаследоваться внутри Cat от Animal.
    Расширить метод feed для кошек. Теперь он должен выводить в консоль информацию вида:
    "Насыпаем в миску (количество гр.) корма.
Кот доволен ^_^"
Использовать вызов родительского метода вида animalFeed() и сохранение контекста this через переменную.
    Все вызовы, которые работали ранее, должны по-прежнему работать корректно.*/




