import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }
  
  url = 'https://hackaton-banco-safra-api.herokuapp.com/api/openbanking';

  fetchOpenAPI() {
    return this.httpClient.get(this.url);
  }

  getPublicBankComparasion() : any {
    return '';
  }

  getClientBankComparasion() : any{
    return '';
  }
}
