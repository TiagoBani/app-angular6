import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

import { FuncionarioGuard } from '../guards/funcionario.guard';
import { FuncionarioResolver } from './guards/funcionario.resolver';
import { FuncionarioDetalheResolver } from './guards/funcionario-detalhe.resolver';

import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';

const funcionarioRoute: Routes = [
    {
        path: '',
        component: FuncionarioComponent,
        canActivateChild: [FuncionarioGuard],
        resolve: { funcionario: FuncionarioResolver },
        children: [
            {
                path: ':matricula',
                component:  FuncionarioDetalheComponent,
                resolve: { funcionario: FuncionarioDetalheResolver }
            }
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
