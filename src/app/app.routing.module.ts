import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoute: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'funcionario',
        loadChildren: './funcionario/funcionario.module#FuncionarioModule',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
