import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  dataFuncionarios: Object[] = [];

  url = '/api/v1/funcionario/users';

  headers: HttpHeaders = new HttpHeaders({
    'X-API-KEY': 'api_key',
    'Authorization': `Basic ${(btoa('login:senha'))}`
  });

  constructor(
    private http: HttpClient
  ) {
  }
  pega(data: any)  {
    this.dataFuncionarios = this.objToArray(data.resource.funcionarios);
    console.log(this.dataFuncionarios);
  }

  objToArray(data: object) {
    return Object.entries(data).map(([type , value]) => ({type , value}));
  }

  getService(url: string): Promise<any> {
      return this.http
          .get(url, {headers: this.headers})
          .toPromise()
          .then(this.extractData)
          .catch(this.handleError);
  }
  private extractData(res: Response) {
      const body = res;
      return body || {};
  }
  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }
}
