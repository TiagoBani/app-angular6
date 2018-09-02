import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { ConnectionService } from '../shared/connection.service';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  header: HttpHeaders;
  dados = new EventEmitter();
  resource = '/v1/funcionario/';
  funcionarios: Funcionario[] = [];

  constructor( private connectionService: ConnectionService ) { }

  getFuncionarios(msg: String ) {
    this.header = this.connectionService.setHeader();
    this.connectionService.getService(`${this.resource}${msg}`, this.header);
    this.connectionService.result.subscribe(
        result => {
          if (result.resource) {
            if ( result.resource.funcionarios ) {
              this.funcionarios = result.resource.funcionarios.insert;
              this.dados.emit(true);
            }
          } else {
            console.log(`${result}`);
          }
        }
      );
  }
  getFuncionario(matricula: String): Funcionario {
    const filtrado = this.funcionarios.filter( c => c.matricula === matricula );
    return filtrado[0] ? filtrado[0] : null ;
  }
}
