import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { FuncionarioService } from './../funcionario/funcionario.service';

@Injectable()
export class FuncionarioGuard implements CanActivateChild {
    constructor(
        private funcionarioService: FuncionarioService,
        private router: Router
    ) {
    }
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        return true;
    }
}
