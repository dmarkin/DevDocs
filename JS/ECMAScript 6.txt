http://es6-features.org
http://es6katas.org/ - обучалка с тестами
http://www.es6fiddle.net/ - примеры использования
http://kangax.github.io/compat-table/es5/ - совместимость ES5
http://kangax.github.io/compat-table/es6/ - совместимость ES6
http://kangax.github.io/compat-table/es2016plus/ - совместимость ES2016+
+ http://dou.ua/lenta/articles/ecmascript-6-is-coming/
+ https://habrahabr.ru/post/305900/#18


Переменные let:
- Видны только после объявления и только в текущем блоке.
- Нельзя переобъявлять (в том же блоке).
- При объявлении переменной в цикле for(let …) – она видна только в этом цикле. Причём каждой итерации соответствует своя переменная let.

const
- Объявление const задаёт константу, то есть переменную, которую нельзя изменить
- Если в константу присвоен объект (это возможно!), то от изменения защищена сама константа, но не свойства внутри неё

    const ARR = [5, 6];
    ARR.push(7);
    console.log(ARR); // [5,6,7]
    ARR = 10; // TypeError
    ARR[0] = 3; // значение можно менять
    console.log(ARR); // [3,6,7]

Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, при котором можно присвоить
массив или объект сразу нескольким переменным, разбив его на части.

spread (...) -  должно стоять только последним элементом в списке слева
https://rainsoft.io/how-three-dots-changed-javascript/

'use strict';

let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");
alert(firstName); // Юлий
alert(lastName);  // Цезарь
alert(rest);      // Император,Рима (массив из 2х элементов)

// значения по умолчанию
let [firstName="Гость", lastName="Анонимный"] = [];
alert(firstName); // Гость
alert(lastName);  // Анонимный

Деструктуризацию можно использовать и с объектами.
'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200

let {width: w, height: h, title} = options;

alert(title);  // Меню
alert(w);      // 100
alert(h);      // 200

let {width=100, height=200, title} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200

Чтобы избежать интерпретации {a, b} как блока, нужно обернуть всё присваивание в скобки:

let a, b;
({a, b} = {a:5, b:6}); // внутри выражения это уже не блок

Если объект или массив содержат другие объекты или массивы, и их тоже хочется разбить на переменные –
при деструктуризации нужно лишь сохранить ту же структуру, что и исходный объект/массив.
Деструктуризации можно как угодно сочетать и вкладывать друг в друга.

Функции
Параметры по умолчанию используются при отсутствующем аргументе или равном undefined
Параметры по умолчанию могут быть не только значениями, но и выражениями.

Оператор spread вместо arguments
Чтобы получить массив аргументов, можно использовать оператор …, например:
function showName(firstName, lastName, ...rest)
В rest попадёт массив всех аргументов, начиная со второго.
Заметим, что rest – настоящий массив, с методами map, forEach и другими, в отличие от arguments.

Ex.
Math.max(...numbers); // the same as Math.max.apply(Math, numbers);

let countries = ['Moldova', 'Ukraine'];
let otherCountries = ['USA', 'Japan'];
countries.push(...otherCountries); // the same as countries.push.apply(countries, otherCountries);

! В свойстве name у функции находится её имя.
let f = function g() {}; имеем f.name === g, g.name === undefined
function g() {}; имеем g.name === g

! Объявление функции Function Declaration, сделанное в блоке, видно только в этом блоке.

Функции-стрелки (Лямбда-выражения)
let inc = x => x + 1; эквивалентно let inc = function(x) { return x + 1; };
С фигурными скобками требуют явного return:
let inc = x => {return x + 1};


- Функции-стрелки не имеют своего this
- Функции стрелки нельзя запускать с new
   Отсутствие у функции-стрелки "своего this" влечёт за собой естественное ограничение: такие функции нельзя использовать в качестве конструктора, то есть нельзя вызывать через new.
   Поиск this в ней осуществляется выше в замыкании.
- Функции-стрелки не имеют своего arguments
   В качестве arguments используются аргументы внешней «обычной» (нестрелочной) функции.

Сохранение внешнего this и arguments удобно использовать для форвардинга вызовов и создания декораторов.

Строки
let str = `обратные
 кавычки`; - в них разрешен перевод строк

Интерполяция при помощи ${…}

Можно использовать свою функцию шаблонизации для строк. Название этой функции ставится перед первой обратной кавычкой:
let str = func`моя строка`;
Эта функция будет автоматически вызвана и получит в качестве аргументов строку, разбитую по вхождениям параметров ${…} и сами эти параметры.
В примере выше видно, что строка разбивается по очереди на части: «кусок строки» – «параметр» – «кусок строки» – «параметр».

Улучшена поддержка юникода

Добавлены ряд полезных методов общего назначения:
    str.includes(s) – проверяет, включает ли одна строка в себя другую, возвращает true/false.
    str.endsWith(s) – возвращает true, если строка str заканчивается подстрокой s.
    str.startsWith(s) – возвращает true, если строка str начинается со строки s.
    str.repeat(times) – повторяет строку str times раз.

Объекты
Улучшения в описании свойств:
    Запись name: name можно заменить на просто name
    Если имя свойства находится в переменной или задано выражением expr, то его можно указать в квадратных скобках [expr].
    Свойства-функции можно оформить как методы: "prop: function() {}" → "prop() {}".

В методах работает обращение к свойствам прототипа через super.parentProperty.

Для работы с прототипом:
    Object.setPrototypeOf(obj, proto) – метод для установки прототипа.
    obj.__proto__ – ссылка на прототип.

Дополнительно:
    Метод Object.assign(target, src1, src2...) – копирует только собственные перечисляемые свойства из всех аргументов в первый объект.
    Метод Object.is(value1, value2) проверяет два значения на равенство.
        Object.is(+0, -0); // false
        Object.is(NaN, NaN); // true

Классы - синтаксический сахар для реализации прототипного наследования.
+See http://frontender.info/es6-classes-final/
В отличие от функций, определения классов не всплывают. Причина этого ограничения в том, что классы могут быть наследниками.

Тело класса может содержать только методы, но не свойства.
Если свойство-значение, всё же, необходимо, то можно создать геттер, который будет нужное значение возвращать.

class Foo {
    constructor(prop) {
        this.prop = prop;
    }
    static staticMethod() {
        return 'classy';
    }
    prototypeMethod() {
        return 'prototypical';
    }
}
let foo = new Foo(123);

Метод constructor определяет функцию, которая представляет собой класс:
Foo === Foo.prototype.constructor

Статические методы (или методы класса) являются методами самого Foo
Как правило, они используются для операций, не требующих наличия объекта (this), например – для фабричных, также статическими удобно делать константы
class Menu {
  static get elemClass() {
    return "menu"
  }
}

Прототипные методы Foo являются и свойствами Foo.prototype. Как правило, эти методы и наследуются экземплярами Foo.

Геттеры и сеттеры
class MyClass {
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: ' + value);
    }
}

> let inst = new MyClass();
> inst.prop = 123;
setter: 123
> inst.prop
'getter'


// Функция constructor запускается при создании new User, остальные методы записываются в User.prototype.
'use strict';

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}


Классы-коллекции
Set – коллекция для хранения множества значений, причём каждое значение может встречаться лишь один раз
 (многократные добавления одного и того же объекта в set не создают лишних копий.).
Методы:
set.add(item) – добавляет в коллекцию item, возвращает set (чейнится).
set.delete(item) – удаляет item из коллекции, возвращает true, если он там был, иначе false.
set.has(item) – возвращает true, если item есть в коллекции, иначе false.
set.clear() – очищает set.
Перебор Set осуществляется через forEach (есть особенность - первые два аргумента совпадают для совместимости метода) или for..of аналогично Map


Map - набор пар ключ:значение
В отличие от объектов, в которых ключами могут быть только строки, в Map ключом может быть произвольное значение (даже объекты и NaN)
Свойство size хранит общее количество записей в map.

let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]); // Аргументом new Map должен быть итерируемый объект (не обязательно именно массив)

map
  .set('2', 'str1')
  .set(2, 'num1')
  .set(false, 'bool1');

Методы для удаления записей:
map.delete(key) удаляет запись с ключом key, возвращает true, если такая запись была, иначе false
map.clear() – удаляет все записи, очищает map

Для проверки существования ключа:
map.has(key) – возвращает true, если ключ есть, иначе false

Для итерации по map используется один из трёх методов:
map.keys() – возвращает итерируемый объект для ключей
map.values() – возвращает итерируемый объект для значений
map.entries() – возвращает итерируемый объект для записей [ключ, значение], он используется по умолчанию в for..of
map.forEach() - метод, аналогичный методу в массиве

WeakSet – особый вид Set не препятствующий сборщику мусора удалять свои элементы. То же самое – WeakMap для Map.
То есть, если некий объект присутствует только в WeakSet/WeakMap и нигде более – он удаляется из памяти.
У WeakSet/WeakMap есть ряд ограничений:
Нет свойства size.
Нельзя перебрать элементы итератором или forEach.
Нет метода clear().
Иными словами, WeakSet/WeakMap работает только на запись (set, delete) и чтение (get, has) элементов по конкретному ключу, а не как полноценная коллекция.
Нельзя вывести всё содержимое WeakMap, нет соответствующих методов.

Циклы for-in нужны для перебора свойств объекта.
Циклы for-of нужны для перебора данных, например, значений массива. Допускают мспользование break, continue и return

Цикл for-of поддерживается во всех текущих версиях Firefox.
Он есть в Chrome, но чтобы был доступен, нужно открыть chrome://flags и включить «Экспериментальный JavaScript».
Он также работает в браузере Edge от Microsoft, но его нет ни в одной версии Internet Explorer.
Если вы хотите пользоваться этим новым синтаксисом, но вам нужно поддерживать IE или Safari,
вы можете воспользоваться компилятором вроде Babel (http://babeljs.io/) или Traceur (https://github.com/google/traceur-compiler#what-is-traceur) от Google,
чтобы транслировать ваш код ES6 в ES5, который поддерживают все браузеры.

На серверной стороне вам не нужен компилятор, просто используйте for-of в io.js (или Node, с флагом --harmony) уже сейчас.

Итераторы
Итератор – объект, предназначенный для перебора другого объекта.
У итератора должен быть метод next(), возвращающий объект {done: Boolean, value: any}, где value – очередное значение, а done принимает значение true в конце перебора.
Метод Symbol.iterator предназначен для получения итератора из объекта.
Цикл for..of делает это автоматически, но можно и вызвать его напрямую.
Встроенные объекты, такие как массивы и строки, являются итерируемыми, в соответствии с описанным выше.

'use strict';

let range = {
  from: 1,
  to: 5
}

// сделаем объект range итерируемым
range[Symbol.iterator] = function() {

  let current = this.from;
  let last = this.to;

  // метод должен вернуть объект с методом next()
  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++
        };
      } else {
        return {
          done: true
        };
      }
    }
  }
};

for (let num of range) {
  alert(num); // 1, 2, 3, 4, 5
}

Генераторы
http://frontender.info/es6-in-depth-generators
Функции-генераторы начинаются с function*. Генераторы — это итераторы
Внутри функции-генератора есть ключевое слово yield с синтаксисом, похожим на return.
Отличие в том, что функция (в том числе функция-генератор) может вернуть значение только один раз,
но отдать значение функция-генератор может любое количество раз.
Выражение yield приостанавливает выполнение генератора, так что его можно позже возобновить.

После того, как генератор вызван, он ещё не начнёт выполняться. Вместо этого он вернёт приостановленный объект Generator
Каждый раз, как вызывается метод .next() у объекта Generator, вызов функции оттаивает и выполняется,
пока не достигнет следующего выражения yield.

При последнем вызове iter.next() поле .done результата становится равно true.
Добраться до конца функции — это всё равно, что вернуть undefined, и именно поэтому поле .value результата равно undefined.

Асинхронность и генераторы
// Синхронный код, производящий шум
function makeNoise() {
  shake();
  rattle();
  roll();
}

// Асинхронный код, производящий шум
// Возвращает объект Promise, который разрешится, когда мы закончим шуметь
function makeNoise_async() {
  return Q.async(function* () {
    yield shake_async();
    yield rattle_async();
    yield roll_async();
  });
}

Из браузеров пока что генераторы поддерживают только Firefox 27+ и Chrome 39+.

Метод-генератор
Если вы определите метод с «*» в начале, то получите _метод генератор_

Наследование
class Animal { }
class Rabbit extends Animal { } // Rabbit - Child, Animal - Parent

alert( Rabbit.prototype.__proto__ == Animal.prototype ); // true

Методы родителя можно переопределить в наследнике. При этом для обращения к родительскому методу используют super.someMethod().
Конструктор constructor родителя наследуется автоматически. То есть, если в потомке не указан свой constructor, то используется родительский.
Если же у потомка свой constructor, то, чтобы в нём вызвать конструктор родителя – используется синтаксис super() с аргументами для родителя.
Для такого вызова есть небольшие ограничения:
    Вызвать конструктор родителя можно только изнутри конструктора потомка. В частности, super() нельзя вызвать из произвольного метода.
    В конструкторе потомка мы обязаны вызвать super() до обращения к this. До вызова super не существует this, так как по спецификации в этом случае именно super инициализует this.

class Animal {

  constructor(_name) {

    Object.defineProperty(this, "name", {
        get: function(){
            return _name;
        },
        set: function(newValue){
            if(newValue.length > 10){
                throw new Error('Name max-length error');
            } else {
                _name = newValue;
            }
        }
    });
  }

  showName() {
    console.log('Animal name is ' + this.name);
  }

}

class Dog extends Animal{
    constructor(_name, _age) {
        super(_name);
        Object.defineProperty(this, "age", {
            get: function(){
                return _age;
            },
            set: function(){
                throw new Error('Property "age" invariant');
            }
        });
      }
    sayWoof() {
              console.log('Dog ' + this.name + ' says woof..woof');
    }
    showAge() {
              console.log('Dog ' + this.name + ' age is ' + this.age);
    }
}

let barbos = new Dog('barbos', 4);

barbos.showName() // Animal name is barbos
barbos.sayWoof() // Dog barbos says woof..woof
barbos.showAge(); //Dog barbos age is 4

// вешаем обработчик при создании и убираем по клику
class Item {
    constructor(elem) {
        this._elem = elem;
        this._doSomethingHandler = event => this._doSomething(event);
        elem.addEventListener("click", this._doSomethingHandler, false);
    }
    _doSomething(event) {
        this._elem.removeEventListener("click", this._doSomethingHandler, false);
        // some code
    }
}

Тип данных Symbol
Новый примитивный тип данных Symbol служит для создания уникальных идентификаторов.
let sym = Symbol(); // typeof sym == 'symbol'
Все символы уникальны. Символы с одинаковым именем не равны друг другу.
У функции Symbol есть необязательный аргумент «имя символа».
let sym = Symbol("name");

Глобальные символы
Существует «глобальный реестр» символов, который позволяет, при необходимости, иметь общие «глобальные» символы,
которые можно получить из реестра по имени.
Для чтения (или создания, при отсутствии) «глобального» символа служит вызов Symbol.for(имя).
У вызова Symbol.for, который возвращает символ по имени, есть обратный вызов – Symbol.keyFor(sym).
Он позволяет получить по глобальному символу его имя
Symbol.keyFor возвращает undefined, если символ не глобальный

Использование символов
Символы можно использовать в качестве имён для свойств объекта (оно не является перечислимым) - свойство-символ недоступно,
 если обратиться к его названию через точку, "символьные" свойства объекта игнорируются во время вызова JSON.stringify()

Object.getOwnPropertySymbols - получить все символы объекта

Модули
Модулем считается файл с кодом. В этом файле ключевым словом export помечаются переменные и функции,
которые могут быть использованы снаружи. Другие модули могут подключать их через вызов import.

http://webtackles.ru/javascript/js-module-bundling/
Используйте преобразователь кода (например, Babel или Traceur) для преобразования кода из ES6 в ES5 в любом формате:
CommonJS, AMD или UMD. Затем пропустите его через упаковщик модулей: Browserify или Webpack, чтобы создать один или несколько
связанных файлов.
SystemJS - построен на ES6 загрузчике модулей

!! На текущий момент модули требуют системы сборки на сервере.

Promises
Promise – это специальный объект, который содержит своё состояние.
Вначале pending, затем – одно из: fulfilled или rejected.

// создаем
var promise = new Promise((resolve, reject) => {
  // Эта функция будет вызвана автоматически

  // В ней можно делать любые асинхронные операции,
  // а когда они завершатся — нужно вызвать одно из:
  // resolve(результат) при успешном выполнении
  // reject(ошибка) при ошибке,
  // после вызова resolve/reject промис уже не может «передумать» - выполняется только resolve или только reject
  // Также можно сгенерировать исключение: throw new Error("o_O"); эквивалентно reject(new Error("o_O"))
})

// навешиваем обработчики
promise.then(onFulfilled, onRejected) // .then() всегда создает новый промис

Промисификация – это когда берут асинхронный функционал и делают для него обёртку, возвращающую промис.
Если вы хотите обернуть значение в обещание, которое будет выполнено немедленно, можно просто написать Promise.resolve(value).
В обратном случае достаточно написать Promise.reject(error).

Функция httpGet(url) будет возвращать промис, который при успешной загрузке данных с url будет переходить
 в fulfilled с этими данными, а при ошибке – в rejected с информацией об ошибке:

 function httpGet(url) {

   return new Promise(function(resolve, reject) {
     var xhr = new XMLHttpRequest();
     xhr.open('GET', url, true);

     xhr.onload = function() {
       if (this.status == 200) {
         resolve(this.response);
       } else {
         var error = new Error(this.statusText);
         error.code = this.status;
         reject(error);
       }
     };

     xhr.onerror = function() {
       reject(new Error("Network Error"));
     };
     xhr.send();
   });
 }

 Использование:

 httpGet("/send/to/this/url")
   .then(
     response => alert(`Fulfilled: ${response}`),
     error => alert(`Rejected: ${error}`)
   );
Chaining
Для того, чтобы результат обработчика передать следующей функции, .then создаёт новый промис и возвращает его.
Если очередной .then вернул промис, то далее по цепочке будет передан не сам этот промис, а его результат, полученный после его разрешения.
Это общее правило: если внутри then стартует новый асинхронный процесс,
 то для того, чтобы оставшаяся часть цепочки выполнилась после его окончания, мы должны вернуть промис.
Можно добавлять и много обработчиков на один и тот же проми
При возникновении ошибки – она отправляется в ближайший обработчик onRejected.
Обработчик .catch(onRejected) получает ошибку и должен обработать её. Есть два варианта развития событий:
  Если ошибка не критичная, то onRejected возвращает значение через return, и управление переходит в ближайший .then(onFulfilled).
  Если продолжить выполнение с такой ошибкой нельзя, то он делает throw, и тогда ошибка переходит в следующий ближайший .catch(onRejected).
!  при отсутствии внешнего .catch ошибка не «вываливается» в консоль и не «убивает» скрипт.

Вызов Promise.all(iterable) получает итерируемый объект промисов и возвращает промис, который ждёт,
 пока все переданные промисы завершатся
Вызов Promise.race(iterable) получает итерируемый объект промисов и возвращает первый успешно выполнившийся промис из списка
Вызов Promise.resolve(value) создаёт успешно выполнившийся промис с результатом value (эквивалент new Promise((resolve) => resolve(value)))
 Использование Promise.resolve() как начала асинхронной цепочки – очень распространённый приём.
Вызов Promise.resolve(value) создаёт выполнившийся с ошибкой промис. Метод Promise.reject используется очень редко,
 гораздо реже чем resolve, потому что ошибка возникает обычно не в начале цепочки, а в процессе её выполнения.
Промисы лежат в основе более продвинутых способов асинхронной разработки.

Интерес представляет также метод fetch:
let promise = fetch(url[, options]);
Свойства options:
    method – метод запроса,
    headers – заголовки запроса (объект),
    body – тело запроса: FormData, Blob, строка и т.п.,
    mode – одно из: «same-origin», «no-cors», «cors», указывает, в каком режиме кросс-доменности предполагается делать запрос,
    credentials – одно из: «omit», «same-origin», «include», указывает, пересылать ли куки и заголовки авторизации вместе с запросом,
    cache – одно из «default», «no-store», «reload», «no-cache», «force-cache», «only-if-cached», указывает, как кешировать запрос,
    redirect – можно поставить «follow» для обычного поведения при коде 30x (следовать редиректу) или «error» для интерпретации редиректа как ошибки.
Как видно, всевозможных настроек здесь больше, чем в XMLHttpRequest.
Поддержка в браузерах пока не очень распространена, но есть полифиллы.
Если мы используем полифилл, то ничего более гибкого, чем оригинальный XMLHttpRequest, мы из этого не получим.
При вызове fetch возвращает промис, который, когда получен ответ, выполняет коллбэки с объектом Response или с ошибкой.
У объекта Response есть методы и свойства:
.headers
.url - на который посылали
.type - 'default' или 'error'
.status - код ответа
.statusText - текст ответа
.ok = this.status >= 200 && this.status < 300
.arrayBuffer(), .blob(), .formData(), .json(), .text() - преобразуют данные ответа в соответствующий формат

Proxy – особый объект, смысл которого – перехватывать обращения к другому объекту и, при необходимости, модифицировать их.

let proxy = new Proxy(target, handler)
Самыми частыми являются ловушки для чтения и записи в объект:
get(target, property, receiver) - срабатывает при чтении свойства из прокси
set(target, property, value, receiver) - срабатывает при записи свойства в прокси, где
    target – целевой объект, тот же который был передан первым аргументом в new Proxy.
    property – имя свойства.
    value – значение свойства.
    receiver – объект, к которому было применено присваивание, обычно сам прокси, либо прототипно наследующий от него.
        Этот аргумент используется редко.
    Метод set должен вернуть true, если присвоение успешно обработано и false в случае ошибки (приведёт к генерации TypeError).
has - срабатывает в операторе in и некоторых других случаях, когда проверяется наличие свойства. Синтаксис has аналогичен get.
deleteProperty - срабатывает при операции delete, должна вернуть true, если удаление было успешным. Синтаксис аналогичен get/has.
    Если просто вернуть true, но не сделать операции удаления свойства - оно сохранится в target.
enumerate - перехватывает операции for..in и for..of по объекту. Метод должен возвратить итератор по массиву.
    Встроенный итератор для массива получаем через вызов props[Symbol.iterator]().
apply - Прокси умеет работать не только с обычными объектами, но и с функциями. Если аргумент target у прокси – функция,
то становится доступна ловушка apply для её вызова. Метод apply(target, thisArgument, argumentsList) получает:
    target – исходный объект,
    thisArgument – контекст this вызова,
    argumentsList – аргументы вызова в виде массива.
        Она может обработать вызов сама и/или передать его функции.
construct - Ловушка construct(target, argumentsList) перехватывает вызовы при помощи new. Она получает исходный объект
    target и список аргументов argumentsList.
getPrototypeOf – перехватывает обращение к методу getPrototypeOf.
setPrototypeOf – перехватывает обращение к методу setPrototypeOf.
isExtensible – перехватывает обращение к методу isExtensible.
preventExtensions – перехватывает обращение к методу preventExtensions.
getOwnPropertyDescriptor – перехватывает обращение к методу getOwnPropertyDescriptor.
defineProperty – перехватывает обращение к методу defineProperty.
ownKeys – перехватывает обращения к методу getOwnPropertyNames.

Каждый перехватчик запускается с handler в качестве this. Это означает, что handler кроме ловушек может содержать и другие полезные свойства и методы.
Особенно приятна возможность перехватывать обращения к отсутствующим свойствам


ECMAScript 2016 / 2017
https://leanpub.com/exploring-es2016-es2017/read


Kinds of Access
Assume a class Foo probably derived from some other class(es) with probably more classes derived from it.

Then accessing

from static method/getter of Foo
some probably overridden static method/getter:
this.method()
this.property
some probably overridden instance method/getter:
impossible by design
own non-overridden static method/getter:
Foo.method()
Foo.property
own non-overridden instance method/getter:
impossible by design
from instance method/getter of Foo
some probably overridden static method/getter:
this.constructor.method()
this.constructor.property
some probably overridden instance method/getter:
this.method()
this.property
own non-overridden static method/getter:
Foo.method()
Foo.property
own non-overridden instance method/getter:
not possible by intention unless using some workaround:
Foo.prototype.method.call( this )
Object.getOwnPropertyDescriptor( Foo.prototype,"property" ).get.call(this);
Keep in mind that using this isn't working this way when using arrow functions or invoking methods/getters explicitly bound to custom value.

Background
When in context of an instance's method or getter
this is referring to current instance.
super is basically referring to same instance, but somewhat addressing methods and getters written in context of some class current one is extending (by using the prototype of Foo's prototype).
definition of instance's class used on creating it is available per this.constructor.
When in context of a static method or getter there is no "current instance" by intention and so
this is available to refer to the definition of current class directly.
super is not referring to some instance either, but to static methods and getters written in context of some class current one is extending.

class A {
  constructor( input ) {
    this.loose = this.constructor.getResult( input );
    this.tight = A.getResult( input );
    console.log( this.scaledProperty, Object.getOwnPropertyDescriptor( A.prototype, "scaledProperty" ).get.call( this ) );
  }

  get scaledProperty() {
    return parseInt( this.loose ) * 100;
  }

  static getResult( input ) {
    return input * this.scale;
  }

  static get scale() {
    return 2;
  }
}

class B extends A {
  constructor( input ) {
    super( input );
    this.tight = B.getResult( input ) + " (of B)";
  }

  get scaledProperty() {
    return parseInt( this.loose ) * 10000;
  }

  static get scale() {
    return 4;
  }
}

class C extends B {
  constructor( input ) {
    super( input );
  }

  static get scale() {
    return 5;
  }
}

class D extends C {
  constructor( input ) {
    super( input );
  }

  static getResult( input ) {
    return super.getResult( input ) + " (overridden)";
  }

  static get scale() {
    return 10;
  }
}


let instanceA = new A( 4 );
console.log( "A.loose", instanceA.loose );
console.log( "A.tight", instanceA.tight );

let instanceB = new B( 4 );
console.log( "B.loose", instanceB.loose );
console.log( "B.tight", instanceB.tight );

let instanceC = new C( 4 );
console.log( "C.loose", instanceC.loose );
console.log( "C.tight", instanceC.tight );

let instanceD = new D( 4 );
console.log( "D.loose", instanceD.loose );
console.log( "D.tight", instanceD.tight );
