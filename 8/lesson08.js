// http://web.archive.org/web/20190405104502/http://learn.javascript.ru/object-methods
// простой объет user со свойством name и методом sayHi
var user = {
    name: 'Василий',

    // метод
    sayHi: function() {
        console.log( 'Привет!' );
    }

};

// Вызов
user.sayHi();