import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CONFIG } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public result = new EventEmitter();
  private auth = new EventEmitter();

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
        data => {
          if (data['resource']) {
            localStorage.setItem('token', data['resource']['token']);
            this.auth.emit(data);
          } else {
            console.log( data['request']['auth_error'] );
          }
        },
        error => console.log(error)
      );
  }
}
