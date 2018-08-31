import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from './login.service';
import { Subscription } from 'rxjs';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private usuario: Usuario = new Usuario();
  private resultado: any;

  private inscricao: Subscription;

  constructor(private loginService: LoginService ) { }

  ngOnInit() {
    this.usuario = this.loginService.getUsuario();
    this.inscricao = this.loginService.dados.subscribe(data => {
      this.resultado = data;
      console.log(this.resultado);
     });
  }

  logar() {
    this.loginService.getAuth(this.usuario);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
