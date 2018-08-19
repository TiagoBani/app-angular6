import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario-servico/funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios: any[] = [];
  private error: Object = {result: false, msg: ''};

  constructor(private funcionarioService: FuncionarioService) {  }

  ngOnInit() {
    this.funcionarioService.getFuncionarios('users');

    this.funcionarioService.dados.subscribe(
      data => this.funcionarios = data // this.objToArray(data)
    );
  }
}
