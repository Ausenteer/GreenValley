'use strict';

// Генератор документации

// При запуске этого файла в папке билда должна генерироваться папка docs/ с документацией проекта.
// Типы страниц:
// 1. Корневая:
//    - список блоков, описание примесей, быстрый поиск
// 2. Страница блока:
//    - внешний вид во всевозможных состояниях
//    - разметка блока для каждого состояния (копипастопригодный вариант) с подсветкой синтаксиса
//    - препроцессорная разметка (jade?) с подсветкой синтаксиса
//    - использованные в блоке СSS-переменные
//    - список вложенных блоков со ссылками на них (для сложных блоков)
//    - кнопки тестирования:
//    - - добавление блоков ДО и ПОСЛЕ
//    - - переполнение текстовых фрагментов блока
//    - - использование неподходящих картинок
// Стилизация типов страниц — теги style в head страниц. JS — аналогично. Брать файлы для вставки из исходников
// (из src/docs-files)