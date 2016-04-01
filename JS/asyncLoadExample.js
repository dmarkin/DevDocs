// http://forum.jscourse.com/t/zadachka-na-js-asinhronnaya-zagruzka/835

// function asyncLoad(ids, load, done) {
// asyncLoad takes an array of identifiers, load function and done function.
//
// load function knows how to load stuff. It takes an identifier
// and a callback function which will be called with load result
//
// done function should be called only when all work of loading stuff is done.
// It takes an array of loaded items
//
// * loaded items should be the same order as ids
// * load should be performed in parallel
// }

// Преимущество асинхронных запросов перед синхронными в том, что можно получить данные, не блокируя интерфейс
// (точнее, основной поток выполнения программы).

'use strict';

var idsArr,
    users = [
    { id: 0, name: 'Oluwafemi Enu' },
    { id: 1, name: 'Kgosi Ekene' },
    { id: 2, name: 'Olufemi Berhanu' },
    { id: 3, name: 'Farai Wasswa' },
    { id: 4, name: 'Eseoghene Chima' },
    { id: 5, name: 'Limbani Sefu' },
    { id: 6, name: 'Tiyamike Itumeleng' },
    { id: 7, name: 'Umukoro Oghenekaro' },
    { id: 8, name: 'Rudo Dalitso' },
    { id: 9, name: 'Chioma Olufemi' },
    { id: 10, name: 'Ekwueme Okoro' }
];

idsArr = users.map(function (el) {
    return el.id;
});

// Инициализирует загрузку всех элементов.
// Запоминает сколько элементов на загрузку было инициализировано.
// При каждом ответе устанавливает флаг для загруженного элемента, и проверяет все ли флаги установлены
// (т.е. все ли элементы из ids загружены). Если загружены все, вызывает done.

function asyncLoad(ids, load, done) {
    var loadingState = [];
    // Инициализируем загрузку всех элементов
    ids.forEach(function (id, index) {
        // Запоминает сколько элементов на загрузку было инициализировано.
        loadingState[index] = false;
        // Инициализируем загрузку элемента
        load(id, function () {
            // При каждом ответе устанавливает флаг для загруженного элемента,
            // проверяет все ли флаги установлены (т.е. все ли элементы из ids загружены).
            // если не все флаги говорят о том, что данные загружены, выходим из функции
            loadingState[index] = true;
            for (var i = 0; i < loadingState.length; i += 1) {
                if (!loadingState[i]) {
                    return;
                }
            }
            // Если загружены все данные, вызывает done.
            done();
        });
    });
}


function jQueryAsyncLoad(ids, load, done) {
    return $.when.apply($, ids.map(function (id) {
        var d = new $.Deferred();
        load(id, d.resolve);
        return d;
    })).then(done);
}



