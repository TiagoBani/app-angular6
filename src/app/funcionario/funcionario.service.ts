import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Funcionario } from '../shared/models/funcionario';
import { ConnectionService } from './../shared/service/connection.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  header: HttpHeaders;
  dados = new EventEmitter<Funcionario[]>();
  resource = '/v1/funcionario/';
  funcionarios: Funcionario[] = [];

  constructor(
    private connectionService: ConnectionService,
    private loginService: LoginService
  ) { }

  private populaFuncionario(response) {
    if (response.resource) {
      this.funcionarios = response.resource.funcionarios.insert;
      this.dados.emit(this.funcionarios);
    } else {
      console.log(`${response}`);
    }
  }
  getFuncionarios(msg: String ) {
    const token = this.loginService.getToken();
    const header = this.connectionService.setHeaderToken(token);
    if ( token == null || header == null ) {
      this.loginService.retirarAutenticado();
    }
    this.connectionService.getService(`${this.resource}${msg}`, header).subscribe(
      result => this.populaFuncionario(result),
      error => console.log(error)
    );
  }
  getFuncionario(matricula: String): Funcionario {
    const filtrado = this.funcionarios.filter( c => c.matricula === matricula );
    return filtrado[0] ? filtrado[0] : null ;
  }
}
