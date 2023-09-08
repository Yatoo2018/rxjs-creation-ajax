import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const users = ajax({
  url: 'https://httpbin.org/delay/2',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'rxjs-custom-header': 'Rxjs',
  },
  body: {
    rxjs: 'Hello World!',
  },
}).pipe(
  map((response) => console.log('response: ', response)),
  catchError((error) => {
    console.log('error: ', error);
    return of(error);
  })
);
