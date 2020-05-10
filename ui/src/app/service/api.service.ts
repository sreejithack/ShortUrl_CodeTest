import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 baseurl="http://localhost";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  postOriginalUrl(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/item?shortBaseUrl=${this.baseurl}&originalUrl=${data}`,{});
//return this.http.post(${environment.apiUrl}/item,data);
  
  }

  
}
