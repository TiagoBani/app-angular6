import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Object[] = [];

  constructor(private funcionarioService: FuncionarioService) {  }

  ngOnInit() {
    this.funcionarioService.getService('/api/v1/funcionario/users')
    .then(
      (data) => this.pega(data)
    )
    .catch(error => console.log(error));
  }
  pega(data: any)  {
    this.funcionarios = this.objToArray(data.resource.funcionarios);
    console.log(this.funcionarios);
  }

  objToArray(data: object) {
    return Object.entries(data).map(([type , value]) => ({type , value}));
  }
  objKey(data: object) {
    return Object.keys(data);
  }
}
