import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  private resultado: any;

  constructor(private loginService: LoginService ) { }

  ngOnInit() {
  }

  logar() {
    this.loginService.getAuth(this.usuario);
    this.loginService.dados.subscribe(data => {
     this.resultado = data;
     console.log(this.resultado);
    });
  }
}
