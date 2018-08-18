import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CONFIG } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public result = new EventEmitter();
  public auth = new EventEmitter();

  private api_key: string = CONFIG['X-API-KEY'];

  constructor( private http: HttpClient) {  }

  setHeader(): HttpHeaders {
    return new HttpHeaders({
      'X-API-KEY': this.api_key,
      'Authorization': localStorage.getItem('Authorization'),
      'APP_TOKEN': `Bearer ${localStorage.getItem('token')}`
    });
  }

  getService(url: string) {
    if (!localStorage.token) {
      this.getAuth();
      this.auth.subscribe( data => this.getService(url) );
    } else {
      this.http.get(`/api${url}`, {headers: this.setHeader()})
      .subscribe(
        data => this.result.emit(data),
        error => console.log(error)
      );
    }
  }
  getAuth() {
    this.http.get(`/api/v1/authentication/auth`, {headers: this.setHeader()})
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
