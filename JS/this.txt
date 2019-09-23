Использование thisArg

У некоторых из встроенных методов в ES 5.1 есть специальный аргумент thisArg, который следует использовать везде, где возможно.

var obj = { f: "foo", b: "bar", q: "qux" };

Object.keys( obj ).forEach(function( key ) {
  // this указывает на `obj`
  console.log( this[ key ] );
}, obj ); // <-- Последний аргумент это `thisArg`

// "foo"
// "bar"
// "qux"

thisArg может быть использован с Array.prototype.every, Array.prototype.forEach, Array.prototype.some, Array.prototype.map, Array.prototype.filter


The rules for determining 'this' from a function call's call-site (точка вызова),
in their order of priority. Ask these questions in this order, and stop when the first rule applies.

1. Is the function called with 'new' (new binding)? If so, this is the newly constructed object.
var bar = new foo()

2. Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding?
If so, this is the explicitly specified object.
var bar = foo.call/apply/bind( obj )

exception: passing obj == null ==> default binding rule applies,
but at such cases more preferable pass in Object.create( null ) instead null

3. Is the function called with a context (implicit binding), otherwise known as an owning or containing object?
If so, this is that context object.
var bar = obj.foo()

4. Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.
var bar = foo()

exception: arrow-functions - The lexical binding of an arrow-function cannot be overridden (even with new!).
function foo() {
    setTimeout(() => {
        // `this` here is lexically adopted from `foo()`
        console.log( this.a );
    },100);
}

var obj = {
    a: 2
};

foo.call( obj ); // 2