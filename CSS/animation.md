CSS эффекты нажатия - http://webtoks.ru/css/css-effekty-nazhatiya/#imageclose-925
CSS эффекты нажатия - http://tympanus.net/Development/ClickEffects/

jQuery DrawSVG - анимационные эффекты для SVG

Анимация и кривые Безье
http://cubic-bezier.com

```transition: left 5s cubic-bezier(0, .5, .5, 1);```

Существует несколько стандартных обозначений кривых:
 linear (ровное движение), ease (default), ease-in (ускорение к концу), ease-out (ускорение в начале) и ease-in-out (более плавное скольжение, чем ease)
Значение linear – это прямая, остальные кривые являются короткой записью следующих cubic-bezier:
ease*               	ease-in            	ease-out        	ease-in-out
(0.25, 0.1, 0.25, 1.0)	(0.42, 0, 1.0, 1.0)	(0, 0, 0.58, 1.0)	(0.42, 0, 0.58, 1.0)

transition: margin-left 9s steps(9, start);
Временная функция steps(количество шагов[, start/end]) позволяет разбить анимацию на чёткое количество шагов.

CSS animations
Анимируют свойства CSS элементов. Отсутствует поддержка в IE9-
Окончание анимации генерирует событие transitionend
Более сложные анимации делаются объединением простых при помощи CSS-правила @keyframes.
После @keyframes задается имя анимации, а потом внутри фигурных скобок — её шаги.
 Шаги можно задавать через проценты или с помощью ключевых слов from и to.
 При этом в шагах можно менять тип анимации (animation-timing-function)

```css
/* Современные браузеры, кроме Chrome, Opera, Safari */
  @keyframes go-left-right {   /* имя анимации */
    from {
      left: 0px;
    }
    to {
      left: calc(100% - 50px);
    }
  }

  /* Префикс для Chrome, Opera, Safari */
  @-webkit-keyframes go-left-right {
    from {
      left: 0px;
    }
    to {
      left: calc(100% - 50px);
    }
  }

  .progress {
      /* применить анимацию go-left-right */
      /* продолжительность 3s */
      /* количество раз: бесконечное (infinite) */
      /* менять направление анимации каждый раз (alternate) */
      animation: go-left-right 3s infinite alternate;
      -webkit-animation: go-left-right 3s infinite alternate;

      position: relative;
      border: 2px solid green;
      width: 50px;
      height: 20px;
      background: lime;
    }
```

animation
Анимировать можно любые элементы, в том числе псевдо-элементы.
Обязательное условие — наличие конкретных значений. Свойства со значением auto не анимируются.