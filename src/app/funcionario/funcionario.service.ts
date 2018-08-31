import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { ConnectionService } from '../shared/connection.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  token: string;
  header: HttpHeaders;
  dados = new EventEmitter();
  resource = '/v1/funcionario/';

  constructor(
    private connectionService: ConnectionService,
    private loginService: LoginService,
  ) {  }

  getFuncionarios(msg: String ) {
    this.token = this.loginService.getToken();
    this.header = this.connectionService.setHeader( this.token );

    this.connectionService.getService(`${this.resource}${msg}`, this.header);
    this.connectionService.result.subscribe(
        result => {
          if (result.resource) {
            this.dados.emit(result.resource.funcionarios);
          }
        }
      );
  }
  getFuncionario(msg: String) {
    this.getFuncionarios(msg);
  }
}
