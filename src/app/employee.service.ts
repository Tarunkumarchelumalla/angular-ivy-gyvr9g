import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { from, Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
  private _url: string = 'https://random-data-api.com/api/v2/users';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
