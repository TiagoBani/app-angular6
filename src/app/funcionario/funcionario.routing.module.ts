import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioComponent } from './funcionario.component';

const funcionarioRoute: Routes = [
    {
        path: '',
        component: FuncionarioComponent
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(funcionarioRoute)
    ],
    exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
