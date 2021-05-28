const part_1 = new Progress(
  '.progress__block.progress__block--1',
  {
    group: 'part_1',
    title: '1. Язык JavaScript',
    value: 0,
    items: [
      {
        title: 'Введение',
        check: false,
        link: 'https://learn.javascript.ru/getting-started'
      },
      {
        title: 'Основы JavaScript',
        check: false,
        link: 'https://learn.javascript.ru/first-steps'
      },
      {
        title: 'Качество кода',
        check: false,
        link: 'https://learn.javascript.ru/code-quality'
      },
      {
        title: 'Объекты: основы',
        check: false,
        link: 'https://learn.javascript.ru/object-basics'
      },
      {
        title: 'Типы данных',
        check: false,
        link: 'https://learn.javascript.ru/data-types'
      },
      {
        title: 'Продвинутая работа с функциями',
        check: false,
        link: 'https://learn.javascript.ru/advanced-functions'
      },
      {
        title: 'Свойства объекта',
        check: false,
        link: 'https://learn.javascript.ru/object-properties'
      },
      {
        title: 'Прототипы',
        check: false,
        link: 'https://learn.javascript.ru/prototypes'
      },
      {
        title: 'Классы',
        check: false,
        link: 'https://learn.javascript.ru/classes'
      },
      {
        title: 'Обработка ошибок',
        check: false,
        link: 'https://learn.javascript.ru/error-handling'
      },
      {
        title: 'Промисы, async/await',
        check: false,
        link: 'https://learn.javascript.ru/async'
      },
      {
        title: 'Генераторы',
        check: false,
        link: 'https://learn.javascript.ru/generators-iterators'
      },
      {
        title: 'Модули',
        check: false,
        link: 'https://learn.javascript.ru/modules'
      },
      {
        title: 'Разное',
        check: false,
        link: 'https://learn.javascript.ru/js-misc'
      },
  ],
})

const part_2 = new Progress(
  '.progress__block.progress__block--2',
  {
    group: 'part_2',
    title: '2. Браузер: документ, события, интерфейсы',
    value: 0,
    items: [
      {
        title: 'Документ',
        check: false,
        link: 'https://learn.javascript.ru/document'
      },
      {
        title: 'Введение в события',
        check: false,
        link: 'https://learn.javascript.ru/events'
      },
      {
        title: 'Интерфейсные события',
        check: false,
        link: 'https://learn.javascript.ru/event-details'
      },
      {
        title: 'Формы, элементы управления',
        check: false,
        link: 'https://learn.javascript.ru/forms-controls'
      },
      {
        title: 'Загрузка документа и ресурсов',
        check: false,
        link: 'https://learn.javascript.ru/loading'
      },
      {
        title: 'Разное',
        check: false,
        link: 'https://learn.javascript.ru/ui-misc'
      },
  ],
})

const part_3 = new Progress(
  '.progress__block.progress__block--3',
  {
    group: 'part_3',
    title: '3. Тематические разделы',
    value: 0,
    items: [
      {
        title: 'Фреймы и окна',
        check: false,
        link: 'https://learn.javascript.ru/frames-and-windows'
      },
      {
        title: 'Бинарные данные и файлы',
        check: false,
        link: 'https://learn.javascript.ru/binary'
      },
      {
        title: 'Сетевые запросы',
        check: false,
        link: 'https://learn.javascript.ru/network'
      },
      {
        title: 'Хранение данных в браузере',
        check: false,
        link: 'https://learn.javascript.ru/data-storage'
      },
      {
        title: 'Анимация',
        check: false,
        link: 'https://learn.javascript.ru/animation'
      },
      {
        title: 'Веб-компоненты',
        check: false,
        link: 'https://learn.javascript.ru/web-components'
      },
      {
        title: 'Регулярные выражения',
        check: false,
        link: 'https://learn.javascript.ru/regular-expressions'
      },
      {
        title: 'CSS для JavaScript-разработчика',
        check: false,
        link: 'https://learn.javascript.ru/css-for-js'
      },
  ],
})

const menu = new Menu({
  list: [
    {
      text: 'Начало',
      href: '#intro'
    },
    {
      text: 'Начни прямо сейчас',
      href: '#learn'
    },
    {
      text: 'Полезные ссылки',
      href: '#docs'
    },
  ]
})