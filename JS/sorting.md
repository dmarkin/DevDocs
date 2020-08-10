Алгоритмы сортировки:
+http://mathhelpplanet.com/static.php?p=javascript-algoritmy-sortirovki
слиянием

1. Пузырьковая сортировка (bubble sort)
Сложность алгоритма: O(n2)
Для понимания и реализации этот алгоритм — простейший, но эффективен он лишь для небольших массивов.
Суть алгоритма пузырьковой сортировки состоит в сравнении соседних элементов и их обмене, если они находятся не в надлежащем порядке.
Неоднократно выполняя это действие, мы заставляем наибольший элемент "всплывать" к концу массива

``` js
// A - массив, который нужно отсортировать по возрастанию
function BubbleSort(A) {
    if (A.length <= 1) return A;
    let n = A.length, i, j;

    for (i = 0; i < n-1; i++)
     { for (j = 0; j < n-1-i; j++)
        { if (A[j+1] < A[j])
           { let t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
        }
     }
    return A;
}
```

2. Сортировка выбором
Сортировка выбором начинается с поиска наименьшего элемента в списке и обмена его с первым элементом (таким образом,
наименьший элемент помещается в окончательную позицию в отсортированном массиве). Затем мы сканируем массив, начиная со
второго элемента, в поисках наименьшего среди оставшихся n−1 элементов и обмениваем найденный наименьший элемент со вторым,
т.е. помещаем второй наименьший элемент в окончательную позицию в отсортированном массиве. В общем случае, при i-ом проходе
по списку (0⩽i⩽n−2) алгоритм ищет наименьший элемент среди последних n−i элементов и обменивает его с A[i].
После выполнения n−1 проходов список оказывается отсортирован.

``` js
// Ошибка: В цикле for (j = i + 1; j < n; j++) длина массива должна присваивать значение переменной i из родительского цикла for (i = 0; i < n-1; i++), иначе сортировка не будет проходить должным образом!
function SelectionSort(A) {
    if (A.length <= 1) return A;
    let n = A.length, i, j;
    for (i = 0; i < n - 1; i++) {
        let min = i;
        for (j = i + 1; j < n; j++) {
         if (A[j] < A[min]) {
        min = j;
        }
       }
      let t = A[min];
      A[min] = A[i];
      A[i] = t;
    }
    return A;
}
```

3. Сортировка вставками
На каждом шаге алгоритма сортировки вставками выбирается один из элементов входного массива и вставляется на нужную позицию
в уже отсортированном массиве, до тех пор, пока входные элементы не будут исчерпаны. Метод выбора очередного элемента из
исходного массива произволен. Обычно (и с целью получения устойчивого алгоритма сортировки), элементы вставляются по порядку
их следования во входном массиве (как в примере ниже):

``` js
function InsertionSort(array) {
  const length = array.length;
  if (length <= 1) return array;
  for (let i = 1; i < length; i++) {
    const current = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > current) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = current;
  }
  return array; // или {...array} - чтобы не мутировать входящий массив
}
```

4. Сортировка Шелла

``` js
function ShellSort(A) {
    if (A.length <= 1) return A;
    let n = A.length, i = Math.floor(n/2), j, k, t;
    while (i > 0)
     { for (j = 0; j < n; j++)
        { k = j, t = A[j];
          while (k >= i && A[k - i] > t)
           { A[k] = A[k - i]; k -= i; }
          A[k] = t;
        }
      i = (i==2) ? 1 : Math.floor(i*5/11);
     }
    return A;
}
```

5. Сортировка подсчётом
Для каждого элемента массива подсчитывается количество элементов, меньших, чем он, и на основе этой информации
текущий элемент помещается в соответствующее место отсортированного массива.

``` js
function SimpleCountingSort(A) {
    if (A.length <= 1) return A;
    let n = A.length, Count = [], B = [], i, j;
    for (i = 0; i < n; i++) Count[ i ] = 0;
    for (i = 0; i < n - 1; i++)
     { for (j = i + 1; j < n; j++) {
      if (A[i] < A[j]) {
        Count[j]++;
      } else {
        Count[i]++;
      }
     }
    for (i = 0; i < n; i++) B[Count[i]] = A[i];
    return B;
}
```

6. Сортировка расчёской
Сортировка расчёской схожа с сортировкой пузырьком. Основная идея этого алгоритма — устранить маленькие значения в конце массива,
которые крайне замедляют сортировку пузырьком (большие значения в начале массива, не представляют проблемы для алгоритма сортировки пузырьком).
В сортировке пузырьком, когда сравниваются два элемента, промежуток (расстояние друг от друга) равен 1.
Основная идея сортировки расчёской в том, что этот промежуток может быть гораздо больше, чем единица.

``` js
function newGap(gap){
   gap /= 1.3;
   if (gap == 9 || gap == 10) gap = 11;
   if (gap < 1) return 1;
   return gap;
}

function CombSort(A) {
   if (A.length <= 1) return A;
   let n = A.length, gap = n, swapped, i;
   do {
        swapped = false;
        gap = newGap(gap);
        for (i = 0; i < n - gap; ++i) {
         if (A[i] > A[i + gap]) {
            swapped = true;
            let t = A[i + gap];
            A[i + gap] = A[i];
            A[i] = t;
            }
         }
   } while (gap > 1 || swapped);
   return A;
}
```

7. Сортировка слиянием

``` js
function Merge(a,low,mid,high) {
    let b = new Array(high + 1 - low), h, i, j = mid + 1, k, h = low, i = 0;
    while (h <= mid && j <= high )
     { if (a[h] <= a[j]){ b[i]=a[h]; h++; }
       else             { b[i]=a[j]; j++; }
       i++;
     }
    if (h > mid){ for (k = j; k <= high; k++){ b[i]=a[k]; i++; } }
    else        { for (k = h; k <= mid; k++){  b[i]=a[k]; i++; } }
    for (k=0; k <= high - low; k++) a[k + low]=b[k];
    return a;
}

function MergeSort(A) {
    if (A.length <= 1) return A;
    function merge_sort(a,low,high)
     { if (low < high)
        { var mid = Math.floor((low + high)/2);
          merge_sort(a, low, mid);
          merge_sort(a, mid+1, high);
          Merge(a, low, mid, high);
        }
     }
    var n = A.length;
    merge_sort(A, 0, n-1);
    return A;
}
```

8. Пирамидальная сортировка

``` js
function HeapSort(A) {
    if (A.length <= 1) return A;
    let n = A.length, i = Math.floor(n/2), j, k, t;
    while (true)
    { if (i > 0) t = A[--i];
      else { n--;
             if (n == 0) return A;
             t = A[n];  A[n] = A[0];
           }
      j = i;  k = j*2+1;
      while (k < n)
       { if (k+1 < n && A[k+1] > A[k]) k++;
         if (A[k] > t)
          { A[j] = A[k];  j = k;  k = j*2+1; }
         else break;
       }
      A[j] = t;
    }
}
```

9. Быстрая сортировка
Quicksort, как правило, считается самой эффективной и быстрой и поэтому используется в V8 как реализация
Array.prototype.sort() для массивов с более чем 23 элементами. Для менее чем 23 элемента в V8 используется insertion sort2.
Merge sort - конкурент quicksort, аналогично ему он также эффективный и быстрый, но имеет дополнительное преимущество -
устойчивость. Поэтому Mozilla и Safari используют его для имплементации Array.prototype.sort().

``` js
function QuickSort(array) {
  if (array.length <= 1) return array;
  let a = [];
  let b = [];
  let pivot = array[0]; // указатель
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      a[a.length] = array[i];
    } else {
      b[b.length] = array[i];
    }
    console.log(a, b)
  }
  return QuickSort(a).concat(pivot, QuickSort(b));
}
```

10. Сортировка перемешиванием (сocktail/shaker sort)
Разновидность пузырьковой сортировки

``` js
function CocktailSort(A) {
    let i = 0, j = A.length - 1, s = true, t;
    while (i < j && s) {
     s = false;
     for (let k = i; k < j; k++) {
      if (A[k] > A[k + 1]){
       t = A[k];
       A[k] = A[k + 1];
       A[k + 1] = t;
       s = true;
      }
     }
     j--;
     if (s) {
      s = false;
      for (let k = j; k > i; k--) {
       if (A[k] < A[k - 1]) {
        t = A[k];
        A[k] = A[k - 1];
        A[k - 1] = t;
        s = true;
       }
      }
     }
     i++;
    }
   return A;
}
```

11. Гномья сортировка (Gnome sort)
Похож на сортировку вставками, в отличие от последней перед вставкой на нужное место происходит серия обменов, как в пузырьковой сортировке.

``` js
function GnomeSort(A) {
    let n = A.length, i = 1, j = 2, t;
    while (i < n) {
     if (A[i - 1] < A[i]) {
      i = j;
      j++;
     } else {
      t = A[i-1];
      A[i - 1] = A[i];
      A[i] = t;
      i--;
      if (i == 0) {
       i = j;
       j++;
      }
     }
    }
    return A;
}
```

12. Естественная сортировка строк (Natural sort)
Простая и эффективная модификация сортировки слиянием, которая учитывает, что данные (или их часть) могут быть уже отсортированы.
Суть её в том, что нужно образовывать цепочки, и производить их слияние не в заранее определённом и фиксированном порядке,
а анализировать имеющиеся в массиве данные.

``` js
// array - это массив со строками (!), не числами.
    function naturalSort(array, extractor) {
      "use strict";
      // преобразуем исходный массив в массив сплиттеров
      var splitters = array.map(makeSplitter);
      // сортируем сплиттеры
      var sorted = splitters.sort(compareSplitters);
      // возвращаем исходные данные в новом порядке
      return sorted.map(function (splitter) {
        return splitter.item;
      });
      // обёртка конструктора сплиттера
      function makeSplitter(item) {
        return new Splitter(item);
      }
      // конструктор сплиттера
      //    сплиттер разделяет строку на фрагменты "ленивым" способом
      function Splitter(item) {
        var index = 0;           // индекс для прохода по строке
        var from = 0;           // начальный индекс для фрагмента
        var parts = [];         // массив фрагментов
        var completed = false;       // разобрана ли строка полностью
        // исходный объект
        this.item = item;
        // ключ - строка
        var key = (typeof (extractor) === 'function') ?
          extractor(item) :
          item;
        this.key = key;
        // количество найденных фрагментов
        this.count = function () {
          return parts.length;
        };
        // фрагмент по индексу (по возможности из parts[])
        this.part = function (i) {
          while (parts.length <= i && !completed) {
            next();   // разбираем строку дальше
          }
          return (i < parts.length) ? parts[i] : null;
        };
        // разбор строки до следующего фрагмента
        function next() {
          // строка ещё не закончилась
          if (index < key.length) {
            // перебираем символы до границы между нецифровыми символами и цифрами
            while (++index) {
              var currentIsDigit = isDigit(key.charAt(index - 1));
              var nextChar = key.charAt(index);
              var currentIsLast = (index === key.length);
              // граница - если символ последний,
              // или если текущий и следующий символы разнотипные (цифра / не цифра)
              var isBorder = currentIsLast ||
                xor(currentIsDigit, isDigit(nextChar));
              if (isBorder) {
                // формируем фрагмент и добавляем его в parts[]
                var partStr = key.slice(from, index);
                parts.push(new Part(partStr, currentIsDigit));
                from = index;
                break;
              } // end if
            } // end while
            // строка уже закончилась
          } else {
            completed = true;
          } // end if
        } // end next
        // конструктор фрагмента
        function Part(text, isNumber) {
          this.isNumber = isNumber;
          this.value = isNumber ? Number(text) : text;
        }
      }
      // сравнение сплиттеров
      function compareSplitters(sp1, sp2) {
        var i = 0;
        do {
          var first = sp1.part(i);
          var second = sp2.part(i);
          // если обе части существуют ...
          if (null !== first && null !== second) {
            // части разных типов (цифры либо нецифровые символы)
            if (xor(first.isNumber, second.isNumber)) {
              // цифры всегда "меньше"
              return first.isNumber ? -1 : 1;
              // части одного типа можно просто сравнить
            } else {
              var comp = compare(first.value, second.value);
              if (comp != 0) {
                return comp;
              }
            } // end if
            // ... если же одна из строк закончилась - то она "меньше"
          } else {
            return compare(sp1.count(), sp2.count());
          }
        } while (++i);
        // обычное сравнение строк или чисел
        function compare(a, b) {
          return (a < b) ? -1 : (a > b) ? 1 : 0;
        };
      };
      // логическое исключающее "или"
      function xor(a, b) {
        return a ? !b : b;
      };
      // проверка: является ли символ цифрой
      function isDigit(chr) {
        var code = charCode(chr);
        return (code >= charCode('0')) && (code <= charCode('9'));
        function charCode(ch) {
          return ch.charCodeAt(0);
        };
      };
    }
```