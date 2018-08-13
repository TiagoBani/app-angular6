import { Injectable, EventEmitter } from '@angular/core';
import { ConnectionService } from '../../shared/connection.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  dados = new EventEmitter();
  resource = '/v1/funcionario/';

  constructor(private connectionService: ConnectionService) { }

  getFuncionarios(msg: String) {
    this.connectionService.getService(`${this.resource}${msg}`);
    this.connectionService.result.subscribe(
      result => this.dados.emit(result)
    );
  }
}
