import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionarioRoutingModule } from './funcionario.routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioService } from './funcionario.service';

import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';
import { FuncionarioGuard } from '../guards/funcionario.guard';

import { FuncionarioResolver } from './guards/funcionario.resolver';
import { FuncionarioDetalheResolver } from './guards/funcionario-detalhe.resolver';
import { KeysPipe } from '../shared/pipes/keys.pipe';

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
    FuncionarioGuard,
    FuncionarioResolver,
    FuncionarioDetalheResolver,
  ]

})
export class FuncionarioModule { }
