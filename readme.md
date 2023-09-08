# Rxjs 创建型操作符 ajax

Rx 对象上有一个 ajax 运算符。它为 Ajax 请求创建一个可观察的对象，其中要么是带有 url、标头等的请求对象，要么是 URL 的字符串。

## type

`const ajax: AjaxCreationMethod;`

## 例子 1

使用 ajax()获取从 API 返回的响应对象。

```typescript
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
```

## 例子 2

使用 ajax.getJSON()从 API 获取数据。

```typescript
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const obs$ = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
```

## 例子 3

使用 ajax()，对象作为参数，方法 POST 延迟两秒。

```ts
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const users = ajax({
  url: 'https://httpbin.org/delay/2',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'rxjs-custom-header': 'Rxjs'
  },
  body: {
    rxjs: 'Hello World!'
  }
}).pipe(
  map(response => console.log('response: ', response)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
```

## 例子 4

使用 ajax()获取。从请求返回的错误对象。

```ts
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const obs$ = ajax(`https://api.github.com/404`).pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
```
