import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Funcionario } from './../../models/funcionario';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit, OnDestroy {

  funcionario: Funcionario;

  private resultado: Boolean = false;
  private inscricao: Subscription;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      ( params: { funcionario: Funcionario }  ) => {
      this.funcionario = params.funcionario;
      this.resultado = this.funcionario !== null || this.funcionario !== undefined ? true : false;
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
