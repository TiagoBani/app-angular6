import { Injectable, EventEmitter } from '@angular/core';

import { ConnectionService } from '../shared/connection.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dados = new EventEmitter();
  private resource = '/v1/authentication/';

  public autenticado = new EventEmitter<Boolean>();
  private auth: Boolean = false;
  private usuario: Usuario = new Usuario();
  private token: string;

  constructor( private connectionService: ConnectionService ) { }

  getAuth(usuario: Usuario) {
    this.connectionService.getService(`${this.resource}auth`, this.getHeader( usuario) );
    this.connectionService.result.subscribe(
        result => {
          if (result['resource']) {
            this.usuario = usuario;
            this.token = result['resource']['token'];

            this.dados.emit('Logado com sucesso');
            this.auth = true;
            this.autenticado.emit(true);
          } else {
            console.log(result);

            this.auth = false;
            this.autenticado.emit(false);
            this.dados.emit(result['request']['auth_error']);
          }
        }
      );
  }
  getUsuario() {
    return this.usuario;
  }
  getToken() {
    return this.token;
  }
  verificaAutenticado() {
    return this.auth;
  }
  retirarAutenticado() {
    this.auth = !this.auth;
    this.autenticado.emit(false);
    return this.auth;
  }
  private getHeader(usuario: Usuario ) {
    return this.connectionService.setHeader(null, usuario);
  }
}
