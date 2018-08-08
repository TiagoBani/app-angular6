import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionarioComponent } from './funcionario.component';

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
  ]

})
export class FuncionarioModule { }
