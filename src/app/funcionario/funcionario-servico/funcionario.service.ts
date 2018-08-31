import { LoginService } from './../../login/login.service';
import { Injectable, EventEmitter } from '@angular/core';
import { ConnectionService } from '../../shared/connection.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  dados = new EventEmitter();
  resource = '/v1/funcionario/';

  constructor(
    private connectionService: ConnectionService,
    private loginService: LoginService
  ) {  }

  getFuncionarios(msg: String) {
    const token = this.loginService.getToken();
    const header = this.connectionService.setHeader( token );

    this.connectionService.getService(`${this.resource}${msg}`, header);
    this.connectionService.result.subscribe(
        result => {
          if (result.resource) {
            this.dados.emit(result.resource.funcionarios);
          }
        }
      );
  }
}
