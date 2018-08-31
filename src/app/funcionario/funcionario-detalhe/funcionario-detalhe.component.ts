import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FuncionarioService } from './../funcionario.service';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit, OnDestroy {

  matricula: String;
  funcionarios: any[] = [];
  private resultado: Boolean = false;
  private inscricao: Subscription;
  private inscricao2: Subscription;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      params => {
        this.matricula = params['matricula'];
        this.pegaFuncionario(this.matricula);
      }
    );
    this.inscricao2 = this.funcionarioService.dados.subscribe(
      data => {
        this.funcionarios = data;
        this.resultado = data.insert ? true : false ;

        console.log(data);
      }
    );
  }
  pegaFuncionario(params) {
    this.funcionarioService.getFuncionario(`users/${params}`);
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
    this.inscricao2.unsubscribe();
  }

}
