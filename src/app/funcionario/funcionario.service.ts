import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  dataFuncionarios: any[] = ['func1', 'func2'];

  url = '/api/v1/funcionario/users';

  headers: HttpHeaders = new HttpHeaders({
    'X-API-KEY': 'api_key',
    'Authorization': 'Basic senha_base64'
  });

  api: any;

  constructor(private http: HttpClient) {
  }

  getFuncionarios() {
    this.api = this.http.get(this.url, {headers: this.headers})
    .subscribe((data) => console.log(data),
      (error) => console.log(error)
    );

    return this.dataFuncionarios;
  }
}
