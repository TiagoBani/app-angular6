import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from './../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.validaRota(this.router);
  }
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.validaRota(this.router);
  }
  validaRota(router: Router) {
    if (!this.verificarResultadoLogin() ||
        this.loginService.getToken() == null
      ) {
      this.loginService.retirarAutenticado();
      return false;
    }
    return true;
  }
  verificarResultadoLogin() {
    return this.loginService.verificaAutenticado();
  }
}
