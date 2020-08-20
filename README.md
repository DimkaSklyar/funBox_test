# Тестовое задание FunBox (Вёрстка)

## Подддержка браузеров

- Chrome
- IE 11
- Firefox
- `(Safari не тестировалось)`
---
**!!!ВАЖНО!!!**
> Для коллектного отображения в IE 11 необходимо запускать проект согласно инструкции после чего сайт будет отображаться по адресу http://localhost:3000/, если открыть файл index.html в данном браузере, вёрстка будет некоректна из-за необходимости использования полифила [ie11CustomProperties](https://github.com/nuxodin/ie11CustomProperties)

## Инструкция
Для работы с этим шаблоном необходимо иметь:
* **[Node.js](https://nodejs.org/en/)**
* **[Gulp](https://gulpjs.com/)**
Для установки всех зависимостей нужно в командной строке ввести:
```cmd
npm install
```
Установить глобально Gulp: 
```cmd
npm install gulp --save-dev -g
```
И запустить Gulp введя:
```cmd
gulp watch
```
После этого окружение настроенно и готово к работе. Если ввести команду 
```cmd
gulp build
```
пройдет компиляция и все файлы будут перемещенны из `/app/` в `/dist/`

## Используемые инструменты
- [Gulp](https://gulpjs.com/)
- [ie11CustomProperties](https://github.com/nuxodin/ie11CustomProperties) Полифил CSS переменных для IE 11 
- [Bootstrap 4 Grid](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [SASS](https://sass-lang.com/)

## Среда разработки
- [VSCode](https://code.visualstudio.com/)

# P.S
> В IE 11 Всё же остался одна проблема с совместимостью, из-за clip-path, рассматривал разные варианты с псевдоэлементами ::before/::after или нарезкой, но всё же решил на данный момент оставить так.

- chrome
![screenshot of sample](https://i.yapx.ru/IoLLF.png)
- IE 11
![screenshot of sample](https://i.ibb.co/vBMW1mX/ie.png)

