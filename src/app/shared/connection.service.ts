import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CONFIG } from '../config';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public result = new EventEmitter();
  public auth = new EventEmitter();

  private token: string;
  private api_key: string = CONFIG['X-API-KEY'];

  constructor( private http: HttpClient) {  }

  getToken() {
    return this.token;
  }
  setToken(token: string) {
    this.token = token;
  }
  setHeader(usuario?: Usuario ): HttpHeaders {
    if (usuario && typeof(usuario) === 'object') {
      return new HttpHeaders({
        'X-API-KEY': this.api_key,
        'Authorization': `Basic ${btoa(`${usuario.matricula}:${usuario.senha}`)}`
      });
    }
    return new HttpHeaders({
      'X-API-KEY': this.api_key,
      'APP_TOKEN': `Bearer ${this.token}`
    });
  }
  getService(url: string, header: HttpHeaders) {
    this.http.get(`/api${url}`, {headers: header})
    .subscribe(
      data => this.result.emit(data),
      error => console.log(error)
    );
  }
}
