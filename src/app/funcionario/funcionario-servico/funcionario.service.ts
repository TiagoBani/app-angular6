import { Injectable, EventEmitter } from '@angular/core';
import { ConnectionService } from '../../shared/connection.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  dados = new EventEmitter();
  result = new EventEmitter();
  resource = '/v1/funcionario/';

  constructor(private connectionService: ConnectionService) {  }

  getFuncionarios(msg: String) {

    if (localStorage.token) {
      this.connectionService.getService(`${this.resource}${msg}`);
      this.connectionService.result.subscribe(
        result => this.dados.emit(result)
      );
    } else {
      this.connectionService.getAuth();
      this.connectionService.auth.subscribe(
         data => !data['request']['auth_error'] ? this.getFuncionarios(msg) :
                                                  this.result.emit(data['request']['auth_error'])
      );
    }
  }
}
