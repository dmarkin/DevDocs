Critical rendering path
https://rashidovr.medium.com/reflow-repaint-composite-%D1%87%D1%82%D0%BE-%D1%8D%D1%82%D0%BE-%D0%B8-%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-a777c5760295
https://gist.github.com/faressoft/36cdd64faae21ed22948b458e6bf04d5

Parsing HTML
Tokenizing HTML
Building DOM
Parsing CSS
Building CSSOM
Render Tree
Reflow / Layout - происходит в основном потоке выполнения JS
Repaint / Paint - происходит в основном потоке выполнения JS
Reflow and repaint can happen at 60 frames per second
Composite - происходит в отдельном потоке выполнения

Optimization:
Make js marked with async
Make DOM changes as butch operations
Avoid animating box model parameters