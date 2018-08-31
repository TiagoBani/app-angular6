import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app.routing.module';
// import { FuncionarioModule } from './funcionario/funcionario.module';
import { AuthGuard } from './guards/auth.guard';
import { ConnectionService } from './shared/connection.service';
import { LoginService } from './login/login.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabecalhoComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterializeModule,
    // FuncionarioModule
  ],
  providers: [
    ConnectionService,
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
