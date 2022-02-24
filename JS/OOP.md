Парадигмы ООП:
- Инкапсуляция (Сокрытие типов данных, сокрытие членов структуры - модификаторы, сокрытие частей программных систем)
- Наследование
Example:
function A(type){
this.type = type;
this.x = 10;
};
A.prototype.getType = function(){return this.type};
A.prototype.getX = function(){return this.x};

function B(type){}; //Наследуем класс А используя prototype
var b = Object.create(new A()); // именно так, а не B.prototype = new A(); var b = new B('cool');
b.x // 10 - назначеное A
b.type // cool

function C(type){
    A.call(this, type);
    //При вызове С через new создается новый объект (this),
    //A назначает ему свойства x и type, но не ставит __proto__, так как не вызвана через new
};
var c = new C("cool");
c.x // 10;
c.type // cool

Наследование с помощью Object.create():
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'

- Полиморфизм - реализация задач одной и той же идеи разными способами;
- Абстракция - отделение концепции от ее экземпляра;
- Посылка сообщений
- Повторное использование

**Composition over inheritance** (has-a relationship vs is-a relationship)
principle should achieve polymorphic behaviour and code reuse by their composition
Example: class implementation
Why: inheritance goes during interpretation, composition during runtime (also it customizable/flexible)
Inheritance use cases: large common code and very sufficient differencies in the rest; simple internal structure
Composition use cases: others

**SOLID - five basic principles of object-oriented programming and design**

Single responsibility principle
    a class should have only a single responsibility (i.e. only one potential change in the software's specification
    should be able to affect the specification of the class)
Для каждого класса должно быть определено единственное назначение. Все ресурсы, необходимые для его осуществления,
 должны быть инкапсулированы в этот класс и подчинены только этой задаче.

Open/closed principle
    “software entities … should be open for extension, but closed for modification.”
Программные сущности должны быть открыты для расширения, но закрыты для изменений.

Liskov substitution principle
    “objects in a program should be replaceable with instances of their subtypes without altering the correctness of
     that program.” See also design by contract.
Методы, использующие некий тип, должны иметь возможность использовать его подтипы, не зная об этом.

Interface segregation principle
    “many client-specific interfaces are better than one general-purpose interface.”
Предпочтительнее разделять интерфейсы на более мелкие тематические, чтобы реализующие их классы не были вынуждены
     определять методы, которые непосредственно в них не используются.

Dependency inversion principle
    “Depend upon Abstractions. Do not depend upon concretions.”
Система должна конструироваться на основе абстракций “сверху вниз”: не абстракции должны формироваться на основе деталей,
 а детали должны формироваться на основе абстракций.
 
**DDD**
Предметно-ориентированное проектирование (реже проблемно-ориентированное, англ. Domain-driven design, DDD)
 — это набор принципов и схем, направленных на создание оптимальных систем объектов. Сводится к созданию программных
  абстракций, которые называются моделями предметных областей. В эти модели входит бизнес-логика, устанавливающая связь
  между реальными условиями области применения продукта и кодом.

Предметно-ориентированное проектирование не является какой-либо конкретной технологией или методологией.
 DDD — это набор правил, которые позволяют принимать правильные проектные решения. Данный подход позволяет значительно
  ускорить процесс проектирования программного обеспечения в незнакомой предметной области.

Подход DDD особо полезен в ситуациях, когда разработчик не является специалистом в области разрабатываемого продукта.
 К примеру: программист не может знать все области, в которых требуется создать ПО, но с помощью правильного
  представления структуры, посредством предметно-ориентированного подхода, может без труда спроектировать приложение,
   основываясь на ключевых моментах и знаниях рабочей области.
