import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from './../../models/funcionario';

@Injectable()
export class FuncionarioResolver implements Resolve<Funcionario> {
    constructor(
        private funcionarioService: FuncionarioService
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            return this.funcionarioService.getFuncionarios(`users`);
    }
}
