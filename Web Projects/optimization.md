Николас Закас JS Оптимизация производительности [O'Raily]

RAIL Model (Response, Animation, Idle, Load) - https://developers.google.com/web/fundamentals/performance/rail
Google Speed - https://developers.google.com/speed/pagespeed/insights/
WebPage Test - https://www.webpagetest.org/
Chrome User Experience Report (Real User Monitoring (RUM) tool) - https://developers.google.com/web/tools/chrome-user-experience-report/

Повышение эффективности
- использование спрайтов
- использование иконочных шрифтов вместо иконок
- минимизация кода CSS, JS, HTML
- предпочитать переходы анимациям (анимацию стоит применять только для свойств элемента opacity и transform)
- ограничение использования JS библиотек и фреймворков
- ограничение использования CSS grids
- кеширование

Производительность и потребление памяти (Chrome) - chrome://memory-redirect/ or Task Manager at Chrome

Manually run the Javascript garbage collector:
- Open the Developer Tools (Ctrl+Shift+J)
- Open the Timeline tab
- Click on the garbage can icon

Netling https://github.com/hallatore/Netling load tester client
Websurge http://websurge.west-wind.com/
https://github.com/GoogleChrome/lighthouse

Алгоритмическая оптимизаиця:
Производительность O(1)
Производительность O(log n), напр. Бинарный поиск
Производительность O(n) - подозрительно
Cycles
array.indexOf
array.lastIndexOf
array.splice
array.includes
array.reverse
array.every
array.find
array.some
array.findIndex
array.reduce
array.reduceRight
Object.values
Object.keys

Методы, выделяющие память
array.slice
array.concat
array.map
array.filter
str.split

Производительность O(n2) - переписать на O(n*log n) (напр., сначала отсортировать массив)

