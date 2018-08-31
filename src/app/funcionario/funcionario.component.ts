import { LoginService } from './../login/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit, OnDestroy {

  funcionarios: any[] = [];
  private inscricao: Subscription;

  constructor(
    private funcionarioService: FuncionarioService,
    private loginService: LoginService
  ) {  }

  ngOnInit() {
    this.inscricao = this.funcionarioService.dados.subscribe(
      data => {
        this.funcionarios = data;
      }
    );
    this.pegaFuncionarios();
  }
  pegaFuncionarios() {
    this.funcionarioService.getFuncionarios(`users`);
  }
  pegaFuncionario() {
    const usuario = this.loginService.getUsuario();
    this.funcionarioService.getFuncionario(`users/${usuario.matricula}`);
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
