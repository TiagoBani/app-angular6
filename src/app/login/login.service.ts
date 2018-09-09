import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionService } from './../shared/service/connection.service';
import { Usuario } from '../shared/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private resource = '/v1/authentication/';

  public dados = new EventEmitter();

  public autenticado = new EventEmitter<Boolean>();
  private auth: Boolean = false;

  /*Dados do usuario*/
  private usuario: Usuario = new Usuario();
  private token: string;

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  getToken() {
    return this.token;
  }
  getUsuario() {
    return this.usuario;
  }
  verificaAutenticado() {
    return this.auth;
  }
  retirarAutenticado() {
    this.auth = false;
    this.autenticado.emit(false);

    this.router.navigate(['/login']);
    return this.auth;
  }
  private validaAutenticado() {
    this.dados.emit('Logado com sucesso');
    this.auth = true;
    this.autenticado.emit(true);
    this.router.navigate(['/']);
  }
  getAuth(usuario: Usuario) {
    const header = this.connectionService.setHeaderUsuario(usuario);
    this.connectionService
      .getService(`${this.resource}auth`, header)
      .subscribe(
        data => this.getConecta(data, usuario),
        error => console.log(error)
      );
  }
  private getConecta(response, usuario: Usuario) {
    if (response.resource) {
      this.usuario = usuario;
      this.token = response.resource.token;
      this.validaAutenticado();
    } else {
      if (response.request.auth_error) {
        alert(`Login ou senha invalidos!`);
        this.dados.emit(response.request.auth_error);
      }
      this.retirarAutenticado();
      console.log(response);
    }
  }
}
