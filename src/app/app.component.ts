import { LoginService } from './login/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app-angular6';
  authLogin: Boolean = true;

  private inscricao: Subscription;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.inscricao = this.loginService.autenticado.subscribe(data => {
      this.authLogin = !data;
    });
  }
  getAuthLogin() {
    return this.authLogin;
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
