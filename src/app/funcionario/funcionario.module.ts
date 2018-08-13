import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioService } from './funcionario-servico/funcionario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FuncionarioComponent
  ],
  exports: [
    FuncionarioComponent
  ],
  providers: [
    FuncionarioService
  ]

})
export class FuncionarioModule { }
