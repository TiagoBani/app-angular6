import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CONFIG } from '../config';
import { Usuario } from '../login/usuario';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public result = new EventEmitter();
  public auth = new EventEmitter();

  private api_key: string = CONFIG['X-API-KEY'];

  constructor( private http: HttpClient) {  }

  setHeader(head: string | Usuario ): HttpHeaders {
    const header = typeof(head) === 'string' ?
    {
      'X-API-KEY': this.api_key,
      'APP_TOKEN': `Bearer ${head}`
    } :
    {
      'X-API-KEY': this.api_key,
      'Authorization': `Basic ${btoa(`${head.matricula}:${head.senha}`)}`
    } ;
    return new HttpHeaders(header);
  }
  getService(url: string, header: HttpHeaders) {
    this.http.get(`/api${url}`, {headers: header})
    .subscribe(
      data => this.result.emit(data),
      error => console.log(error)
    );
  }
}
