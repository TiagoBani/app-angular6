import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './../models/funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit, OnDestroy {

  funcionarios: Funcionario[] = [];
  private inscricao: Subscription;

  constructor( private funcionarioService: FuncionarioService ) { }

  ngOnInit() {
    this.inscricao = this.funcionarioService.dados.subscribe(
      () => this.funcionarios = this.funcionarioService.funcionarios
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
