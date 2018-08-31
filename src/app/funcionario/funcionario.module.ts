import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionarioRoutingModule } from './funcionario.routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioService } from './funcionario.service';

import { KeysPipe } from '../pipes/keys.pipe';
import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';
import { FuncionarioGuard } from '../guards/funcionario.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FuncionarioRoutingModule
  ],
  declarations: [
    FuncionarioComponent,
    KeysPipe,
    FuncionarioDetalheComponent
  ],
  exports: [
    // FuncionarioComponent
  ],
  providers: [
    FuncionarioService,
    FuncionarioGuard
  ]

})
export class FuncionarioModule { }
