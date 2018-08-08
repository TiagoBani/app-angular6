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

  funcionarios: any[] = [];

  constructor(private funcionarioService: FuncionarioService) {  }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.getFuncionarios();
  }
}
