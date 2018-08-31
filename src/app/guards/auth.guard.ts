import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private loginService: LoginService,
        private router: Router
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        if (!this.verificarResultadoLogin()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
    verificarResultadoLogin() {
        return this.loginService.verificaAutenticado();
    }
}
