import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((data) => data), catchError((err) => console.error(err)));
  }
}