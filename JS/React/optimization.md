**Сокращение количества перерисовок DOM**
Заранее подготавливайте функции-обработчики и сохраняйте их в свойства классов, используйте мемоизацию с хуками
(например, useCallback) или с компонентами высшего порядка. А объекты кешируйте с помощью useState, useMemo, сохраняйте
в свойствах классов или вообще — в корне модуля.
Пример правильного обработчика для onClick (с использованием хука):
``const MyButtonComponent = () => {
  const clickHandler = React.useCallback(
    (e) => console.log('Clicked')
  );
  return <button
    onClick={clickHandler}
  />
}``
Хук useCallback гарантирует, что переменная clickHandler всегда будет ссылаться на одну и ту же область памяти.

**Сокращение количества обновлений компонентов**
PureComponent - для классовых компонентов
shouldComponentUpdate - проверка конкретных пропсов, для классовых компонентов 
React.memo - для функциональных компонентов
Диагностика: why-did-you-render, React DevTools, Redux DevTools

**Virtualize large lists**
 react-window - https://web.dev/virtualize-long-lists-react-window/
 react-virtualized

**Облегчение тяжелых вычислений в рамках компонентов**
Использовать иммутабельность, мемоизацию результатов тяжелых вычислений
Не использовать deepCompare
Диагностика: React Profiler
