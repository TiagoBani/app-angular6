import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CONFIG } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public result = new EventEmitter();
  public auth = new EventEmitter();

  private headers: HttpHeaders;

  private api_key: string = CONFIG['X-API-KEY'];
  private authorization: string = CONFIG['Authorization'];

  constructor( private http: HttpClient) {
    this.setHeader();

    this.getAuth();
    this.auth.subscribe(data => console.log(data));
  }

  setHeader() {
    this.headers = new HttpHeaders({
      'X-API-KEY': this.api_key,
      'Authorization': this.authorization,
      'APP_TOKEN': `Bearer ${localStorage.getItem('token')}`
    });
  }

  getService(url: string) {
    this.http.get(`/api${url}`, {headers: this.headers})
      .subscribe(
        data => this.result.emit(data),
        error => console.log(error)
      );
  }
  getAuth() {
    this.http.get(`/api/v1/authentication/auth`, {headers: this.headers})
      .subscribe(
        data => this.getToken(data),
        error => console.log(error)
      );
  }
  private getToken(token: Object) {
    if (token['resource']) {
      localStorage.setItem('token', token['resource']['token']);
    } else {
      console.log(token['request']['auth_error']);
    }
    this.auth.emit(token);
  }
}
