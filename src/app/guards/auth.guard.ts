import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from './../login/login.service';
import { ConnectionService } from './../shared/service/connection.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private loginService: LoginService,
        private connectionService: ConnectionService,
        private router: Router
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        return this.validaRota(this.router);
    }
    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
        return this.validaRota(this.router);
    }
    validaRota(router: Router) {
        if (!this.verificarResultadoLogin() ||
            this.connectionService.getToken() === undefined ||
            this.connectionService.getToken() === null
        ) {
            this.loginService.retirarAutenticado();
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
    verificarResultadoLogin() {
        return this.loginService.verificaAutenticado();
    }
}
