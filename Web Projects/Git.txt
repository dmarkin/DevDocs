Системы контроля версий (SVN, Git, Mercury)
Git / Github
http://githowto.com/ru/making_changes
https://try.github.io/levels/1/challenges/1
https://www.youtube.com/watch?v=RiYz59qVypg
https://www.youtube.com/watch?v=5d7OcL_bQjI
http://habrahabr.ru/post/125799/
http://habrahabr.ru/post/60030/
http://habrahabr.ru/post/60347/


git config --global user.name 'dmarkin'
git config --global user.email dmarkin@ua.fm // all configs saves at .gitconfig file
git config --list // shows all configs
git init // creates git dir at project
git status // shows all added project files
git add file1 // adds file1 at git
git log -p // log of commits
git log —graph // log of commits with 
git commit -a -m 'comment' // adding at stage and commit all files
git checkout [first 7 digits of commit]
git checkout master // master branch
git checkout [branch] // переключение на ветку
git checkout -b [branch] // создание и переключение на ветку
git diff // all changes
git diff --staged // all changes at added file
git branch // all branches
git branch -d [branch] // delete branch (only from another branch!)
git fetch // позволяет прежде чем сделать pull, посмотреть обновления
git merge, git rebase - для объединения двух веток, в которых были сделаны изменения
git remote // удаленный репо

git help

При форке какого-либо проекта:
fork - копия текущего состояния проекта
git clone https://github.com/dreamonus/name-of-project // копирует версию на локальный ПК

Stage - локальный репо
Compare - сравнить
Branch - ветка
Expand - расширить
Collapse - свернуть
revert - отменить, возвратить
merge - объединить, поглотить
stash / unstash - спрятать
reset - обнулить, сбросить
fetch - получить, позвать
rebase

https://www.thinkful.com/learn/a-guide-to-using-github-pages/
Github Page from existing project:
at project dir
git checkout -b gh-pages
git push origin gh-pages

Rebase
https://habrahabr.ru/post/161009/