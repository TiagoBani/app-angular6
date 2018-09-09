import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from '../models/usuario';
import { CONFIG } from './../../config';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private api_key: string = CONFIG['X-API-KEY'];

  constructor(private http: HttpClient) {}

  setHeaderUsuario(usuario: Usuario): HttpHeaders {
    if (usuario && typeof usuario === 'object') {
      return new HttpHeaders({
        'X-API-KEY': this.api_key,
        Authorization: `Basic ${btoa(`${usuario.matricula}:${usuario.senha}`)}`
      });
    }
    return null;
  }
  setHeaderToken(token: string): HttpHeaders {
    if (token !== '' && token != null) {
      return new HttpHeaders({
        'X-API-KEY': this.api_key,
        APP_TOKEN: `Bearer ${token}`
      });
    }
    return null;
  }
  getService(url: string, header: HttpHeaders) {
    return this.http.get(`/api${url}`, { headers: header });
  }
}
