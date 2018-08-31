import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionarioRoutingModule } from './funcionario.routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioService } from './funcionario-servico/funcionario.service';
import { KeysPipe } from '../pipes/keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FuncionarioRoutingModule
  ],
  declarations: [
    FuncionarioComponent,
    KeysPipe
  ],
  exports: [
    FuncionarioComponent
  ],
  providers: [
    FuncionarioService
  ]

})
export class FuncionarioModule { }
