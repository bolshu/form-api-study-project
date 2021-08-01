# Form study project

## Макет
```
https://www.figma.com/file/oEox18VbeVdWPifGqj5PbK/Form-study-project?node-id=0%3A1
```

## Запуск и разработка

### Установить зависимости
```
npm install
```

### Запустить сервер
```
npm run start
```

## API

### Тело запроса
```
{
  name: string;
  email: string;
  phone: string;
}
 ```

### Коды ответов

`200` — success
`400` — fail. Когда один не передали одно из полей `email` или `phone`