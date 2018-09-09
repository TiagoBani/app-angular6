import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionService } from './../shared/service/connection.service';
import { Usuario } from '../shared/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dados = new EventEmitter();
  private resource = '/v1/authentication/';

  public autenticado = new EventEmitter<Boolean>();
  private auth: Boolean = false;
  private usuario: Usuario = new Usuario();

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) { }

  getUsuario() {
    return this.usuario;
  }
  verificaAutenticado() {
    return this.auth;
  }
  retirarAutenticado() {
    this.auth = !this.auth;
    this.autenticado.emit(false);
    return this.auth;
  }
  getAuth(usuario: Usuario) {
    const header = this.connectionService.setHeader(usuario);
    this.connectionService.getService(`${this.resource}auth`, header );
    this.getConecta(usuario);
  }
  private getConecta(usuario: Usuario) {
    this.connectionService.result.subscribe(
      result => {
        if (result.resource) {
          if (result.resource.token) {
            this.usuario = usuario;
            this.connectionService.setToken(result.resource.token);

            this.dados.emit('Logado com sucesso');
            this.auth = true;
            this.autenticado.emit(true);
            this.router.navigate(['/']);
          }
        } else {
          if ( result.request ) {
            if (result.request.auth_error) {
              this.dados.emit(result.request.auth_error);
            }
          }
          this.auth = false;
          this.autenticado.emit(false);
          this.router.navigate(['/login']);
          console.log(result);
        }
      }
    );
  }
}
