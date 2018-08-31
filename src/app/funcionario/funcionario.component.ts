import { Component, OnInit, OnDestroy } from '@angular/core';
import { FuncionarioService } from './funcionario-servico/funcionario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit, OnDestroy {

  funcionarios: any[] = [];
  private error: Object = {result: false, msg: ''};

  private inscricao: Subscription;

  constructor(private funcionarioService: FuncionarioService) {  }

  ngOnInit() {
    this.funcionarioService.getFuncionarios('users');

    this.inscricao = this.funcionarioService.dados.subscribe(
      data => this.funcionarios = data // this.objToArray(data)
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
