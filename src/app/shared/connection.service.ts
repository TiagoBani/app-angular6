import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CONFIG } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  result = new EventEmitter();
  private headers: HttpHeaders;

  private api_key = CONFIG['X-API-KEY'];
  private auth    = CONFIG['Authorization'];

  constructor( private http: HttpClient) {
    this.setHeader();
  }

  setHeader() {
    this.headers = new HttpHeaders({
      'X-API-KEY': this.api_key,
      'Authorization': this.auth
    });
  }

  getService(url: string) {
    this.http.get(`/api/${url}`, {headers: this.headers})
      .subscribe(
        data => this.result.emit(data),
        error => console.log(error)
      );
  }
}
