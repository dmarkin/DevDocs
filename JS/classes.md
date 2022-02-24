class User {
  prop = value; // свойство, новая возможность
  constructor(arg1, arg2, ...) { // конструктор
    // ...
  }
  method(...) {} // метод
  get something() {return this._name;} // геттер
  set something(name) {this._name = name;} // сеттер
  [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
  // ...
}

При вызове let user = new User("John");
1. свойства записываются в экземпляр user
2. вызывается конструктор класса
3. методы записываются в User.prototype

Конструкторы
Which functions can be constructors - all used with new (https://css-tricks.com/understanding-javascript-constructors/)

Класс не может быть вызван без new
Методы неперечислимы в for ... in
Внутри класса автоматически действует use strict;

**Наследование**
class Child extends Parent {
  constructor (argParent, argChild) {
    super(argParent);
    this.child = argChild;
  }
  
  saveChild(child) {
    super.saveParent(child);
    this.childAge = child.age;
  }
}

Также наследуются статические методы (кроме случая наследования одного встроенного класса от другого встроенного класса!
 - например, Date не наследует статический метод Object.keys класса Object).
 
 