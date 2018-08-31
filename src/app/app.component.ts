import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-angular6';
  authLogin: Boolean = true;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.authLogin = this.loginService.autenticado.subscribe(data => {
      this.authLogin = !data;
    });
  }
}
