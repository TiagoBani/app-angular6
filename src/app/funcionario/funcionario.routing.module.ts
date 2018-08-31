import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioGuard } from '../guards/funcionario.guard';
import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';

const funcionarioRoute: Routes = [
    {
        path: '',
        component: FuncionarioComponent,
        canActivateChild: [FuncionarioGuard],
        children: [
            {path: ':matricula', component:  FuncionarioDetalheComponent}
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(funcionarioRoute)
    ],
    exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
