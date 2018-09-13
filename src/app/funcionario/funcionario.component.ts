import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FuncionarioService } from './funcionario.service';
import { Funcionario } from '../shared/models/funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Observable<Funcionario[]>;

  constructor( private funcionarioService: FuncionarioService ) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.dados;
  }
}
