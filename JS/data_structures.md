https://github.com/trekhleb/javascript-algorithms
https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
https://dou.ua/lenta/articles/algorithms-and-structures/

Линейные структуры данных: стеки и очереди.
Массивы в JavaScript имеют встроенную реализацию стека и очереди.
Стек хранит данные в последовательном порядке и удаляет последние добавленные данные (LIFO).

```ecmascript 6
/* ES6 */
class Stack {
    constructor () {
        this._size = 0;
        this._storage = {};
    }

    push(data) {
        let size = ++this._size;
        this._storage[size] = data;
    }

    pop () {
        let size = this._size,
            deletedData;

        if (size) {
            deletedData = this._storage[size];

            delete this._storage[size];
            this._size--;

            return deletedData;
        }
    }
}
```

```js
/* ES5 */
function Stack() {
    this._size = 0;
    this._storage = {};
}

Stack.prototype.push = function(data) {
    var size = ++this._size;
    this._storage[size] = data;
};

Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;

    if (size) {
        deletedData = this._storage[size];

        delete this._storage[size];
        this._size--;

        return deletedData;
    }
};
```

Очередь также хранит данные в последовательном порядке, но удаляет самые старые элементы (FIFO****).

```ecmascript 6
/* ES6 */
class Queue {
    constructor () {
        this._oldestIndex = 1;
        this._newestIndex = 1;
        this._storage = {};
    }

    size () {
        return this._newestIndex - this._oldestIndex;
    }

    enqueue(data) {
        this._storage[this._newestIndex] = data;
        this._newestIndex++;
    }

    dequeue () {
        let oldestIndex = this._oldestIndex,
            newestIndex = this._newestIndex,
            deletedData;

        if (oldestIndex !== newestIndex) {
            deletedData = this._storage[oldestIndex];
            delete this._storage[oldestIndex];
            this._oldestIndex++;

            return deletedData;
        }
    }
}
```

```js
/* ES5 */
function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}

Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};

Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};

Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;

    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;

        return deletedData;
    }
};
```

Односвязный список
В информатике представляет собой структуру данных, которая содержит последовательность связанных узлов.
Каждый узел содержит данные и указатель, который может указывать на другой узел.
Основные операции с односвязными списками:
Node
    data - здесь хранятся значения;
    next - указывает на следующий узел в списке.

SinglyList
    _length - извлекает количество узлов в списке;
    head - определяет узел, как головной элемент списка;
    add(value) - добавляет узел в список;
    searchNodeAt(position) - ищет в списке узел на n-ной позиции;
    remove(position) - удаляет узел из списка.

```ecmascript 6
/* ES6 */
class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyList {
    constructor () {
        this._length = 0;
        this.head = null;
    }

    add(value) {
        let node = new Node(value),
            currentNode = this.head;

        // case if the list is void
        if (!currentNode) {
            this.head = node;
            this._length++;

            return node;
        }

        // case if the list isn't void
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        this._length++;

        return node;
    }

    searchNodeAt(position) {
        let currentNode = this.head,
            length = this._length,
            count = 1,
            message = {failure: 'Failure: non-existent node in this list.'};

        // failed position argument
        if (length === 0 || position < 1 || position > length) {
            throw new Error(message.failure);
        }

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    remove(position) {
        let currentNode = this.head,
            length = this._length,
            count = 0,
            message = {failure: 'Failure: non-existent node in this list.'},
            beforeNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null;

        // failed position argument
        if (position < 0 || position > length) {
            throw new Error(message.failure);
        }

        // case if position === 1
        if (position === 1) {
            this.head = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            this._length--;

            return deletedNode;
        }

        // case if position > 1
        while (count < position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this._length--;

        return deletedNode;
    }
}
```

```js
/* ES5 */
function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    // 1-ый случай: пустой список
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // 2-ой случай: не пустой список
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1-ый случай: неверная позиция
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: верная позиция
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1-ый случай: неверная позиция
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: удаляем первый узел
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // 3-ий: удаляем любой другой узел
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};
```

Двусвязный список
Двусвязный список поддерживает все возможности односвязного списка и расширяет их для обработки в двух направлениях.
Поэтому мы можем обрабатывать данные в двусвязном списке от первого узла к последнему, и от последнего узла к первому.
Операции двусвязных списков
Node

    data - здесь хранятся значения;
    next - указывает на следующий узел в списке;
    previous - указывает на предыдущий узел в списке.

DoublyList

    _length - извлекает количество узлов в списке;
    head - назначает узел в качестве головного элемента списка;
    tail - назначает узел в качестве конечного элемента списка;
    add(value) - добавляет узел в список;
    searchNodeAt(position) - ищет узел на n-ной позиции в списке;
    remove(position) - удаляет узел из списка.

```ecmascript 6
/* ES6 */
class Node {
    constructor(value) {
        this.data = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyList {
    constructor () {
        this._length = 0;
        this.head = null;
        this.tail = null;
    }

    add(value) {
        let node = new Node(value);

        if (this._length) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

        this._length++;

        return node;
    }

    searchNodeAt(position) {
        let currentNode = this.head,
            length = this._length,
            count = 1,
            message = {failure: 'Failure: non-existent node in this list.'};

        if (length === 0 || position < 1 || position > length) {
            throw new Error(message.failure);
        }

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    remove(position) {
        let currentNode = this.head,
            length = this._length,
            count = 1,
            message = {failure: 'Failure: non-existent node in this list.'},
            beforeNodeToDelete = null,
            afterNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null;

        if (length === 0 || position < 1 || position > length) {
            throw new Error(message.failure);
        }

        if (position === 1) {
            deletedNode = this.head;
            this.head = currentNode.next;

            // if at list more than 1 node
            if (this.head) {
                this.head.previous = null;
                }
            // if at list only 1 node
            else {
                this.tail = null;
            }
        }
        // if position is last node
        else if (position === this._length) {
            deletedNode = this.tail;
            this.tail = this.tail.previous;
            this.tail.next = null;
        }
        // position isn't first or last node
        else {
            while (count < position) {
                currentNode = currentNode.next;
                count++;
            }

            beforeNodeToDelete = currentNode.previous;
            nodeToDelete = currentNode;
            afterNodeToDelete = currentNode.next;

            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.previous = beforeNodeToDelete;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
        }

        this._length--;

        return deletedNode;
    }
}
```

```js
/* ES5 */
function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

DoublyList.prototype.add = function(value) {
    var node = new Node(value);

    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }

    this._length++;

    return node;
};

DoublyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1-ый случай: неверная позиция
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: верная позиция
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

DoublyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        afterNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1-ый случай: неверная позиция
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: первый узел удален
    if (position === 1) {
        this.head = currentNode.next;

        // 2-ой случай: существует второй узел
        if (!this.head) {
            this.head.previous = null;
        // 2-ой случай: второго узла не существует
        } else {
            this.tail = null;
        }

    // 3-ий случай: последний узел удален
    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    // 4-ый случай: средний узел удален
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;

        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }

    this._length--;

    return message.success;
};
```

Хэш-таблица
Мэппинг ключей к значениям происходит благодаря использованию хэш-функции.

Куча (Heap)
Специализированная структура данных типа дерево, которая удовлетворяет свойству кучи: если B является узлом-потомком
узла A, то ключ(A) ≥ ключ(B). Куча является максимально эффективной реализацией абстрактного типа данных, который
называется очередью с приоритетом.

Дерево
В информатике дерево представляет собой структуру, которая задает иерархические данные с узлами.
Каждый узел дерева содержит собственные данные и указатели на другие узлы.
В рассматриваемом далее примере каждый узел должен содержать уникальные данные!

Пример - DOM

Операции дерева

Любое дерево содержит узлы, которые могут являться отдельными конструкторами дерева,
и мы определим операции для обоих конструкторов: Node и Tree.
Node
    data - здесь хранятся значения;
    parent - указывает на родительский элемент узла;
    children - указывает на следующий узел в списке.

Tree
    _root - указывает на корневой узел дерева;
    traverseDF(callback) - проходит узлы дерева с помощью метода DFS (поиск в глубину);
    traverseBF(callback) - проходит узлы дерева с помощью метода BFS (поиск в ширину);
    contains(callback, traversal) - ищет узел дерева;
    add(data, toData, traversal) - добавляет узел к дереву;
    remove(child, parent) - удаляет узел дерева и все его дочерние узлы.

```ecmascript 6
/* ES6 - нужно пофиксить */
class Node {
    constructor (data) {
       this.data = data;
       this.parent = null;
       this.children = [];
    }
}

class Tree {
    constructor (data) {
       this._root = new Node(data);
    }

    traverseDF(callback) {
        (function recurse(currentNode) {
           for (let i = 0, length = currentNode.children.length; i < length; i++) {
               recurse(currentNode.children[i]);
           }

           callback(currentNode);
        })(this._root);
    }

    traverseBF(callback) {
        // use class Queue - see above
        let queue = new Queue();
        queue.enqueue(this._root);
        let currentTree = queue.dequeue();

        while (currentTree) {
            for (let i = 0, length = currentTree.children.length; i < length; i++) {
                queue.enqueue(currentTree.children[i]);
            }

            callback(currentTree);
            currentTree = queue.dequeue();
        }
    }

    contains(callback, traversal) {
        // Первый аргумент связывает traversal с деревом, для которого вызывается contains;
        // второй аргумент - это функция, которая вызывается на каждом узле дерева
        traversal.call(this, callback);
    }

    // data используется для создания нового экземпляра узла;
    // toData - используется для сравнения каждого узла в дереве
    add(data, toData, traversal) {
        let child = new Node(data),
            parent = null,
            callback = function(node) {
                if (node.data === toData) {
                    parent = node;
                }
            };

        this.contains(callback, traversal);

        if (parent) {
            parent.children.push(child);
            child.parent = parent;
        } else {
            throw new Error('Cannot add node to a non-existent parent.');
        }
    }

    remove(data, fromData, traversal) {
        let parent = null,
            childToRemove = null,
            index,
            callback = function(node) {
                if (node.data === fromData) {
                    parent = node;
                }
            };

        function findIndex(arr, data) {
            let i = 0, index;

            for (i; i < arr.length; i++) {
                if (arr[i].data === data) {
                    index = i;
                }
            }

            return index;
        }

        this.contains(callback, traversal);

        if (parent) {
            index = findIndex(parent.children, data);

            if (index === undefined) {
                throw new Error('Node to remove does not exist.');
            } else {
                childToRemove = parent.children.splice(index, 1);
            }
        } else {
            throw new Error('Parent does not exist.');
        }

        return childToRemove;
    };
}
```

```js
/* ES5 */
function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    this._root = new Node(data);
}

Tree.prototype.traverseDF = function(callback) {
    (function recurse(currentNode) {
        // шаг 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // шаг 3
            recurse(currentNode.children[i]);
        }

        // шаг 4
        callback(currentNode);

        // шаг 1
    })(this._root);

};

Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();

    queue.enqueue(this._root);

    var currentTree = queue.dequeue();

    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }

        callback(currentTree);
        currentTree = queue.dequeue();
    }
};

Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };

    this.contains(callback, traversal);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

Tree.prototype.remove = function(data, fromData, traversal) {
    var parent = null,
        childToRemove = null,
        index;

    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };

    this.contains(callback, traversal);

    if (parent) {
        index = findIndex(parent.children, data);

        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }

    return childToRemove;
};

function findIndex(arr, data) {
    var index;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }

    return index;
}
```

Использование
```js
/* ES5 */
var tree = new Tree('CEO');

tree.add('VP of Happiness', 'CEO', tree.traverseBF);
tree.add('VP of Finance', 'CEO', tree.traverseBF);
tree.add('VP of Sadness', 'CEO', tree.traverseBF);
tree.add('Director of Puppies', 'VP of Finance', tree.traverseBF);
tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseBF);

// and then
tree.remove('VP of Sadness', 'CEO', tree.traverseBF);
```

Очередь с приоритетом (priority queue)
