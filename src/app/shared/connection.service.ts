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
  private usuario: Usuario = new Usuario();

  private api_key: string = CONFIG['X-API-KEY'];

  constructor( private http: HttpClient) {  }

  setHeader(token: string, usuario?: Usuario ): HttpHeaders {
    if (!usuario) {
      this.token = token !== '' && token !== undefined && token !== null ? token : this.token;
      return new HttpHeaders({
        'X-API-KEY': this.api_key,
        'APP_TOKEN': `Bearer ${this.token}`
      });
    }
    if (usuario && typeof(usuario) === 'object') {
      this.usuario = usuario;
      return new HttpHeaders({
        'X-API-KEY': this.api_key,
        'Authorization': `Basic ${btoa(`${this.usuario.matricula}:${this.usuario.senha}`)}`
      });
    }
    return null;
  }
  getService(url: string, header: HttpHeaders) {
    this.http.get(`/api${url}`, {headers: header})
    .subscribe(
      data => this.result.emit(data),
      error => console.log(error)
    );
  }
}
