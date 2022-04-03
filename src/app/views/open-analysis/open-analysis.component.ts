import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'open-analysis',
  templateUrl: './open-analysis.component.html',
  styleUrls: ['./open-analysis.component.css']
})
export class OpenAnalysisComponent implements OnInit {

  client = {
    name: 'Rogério Santos Oliveira',
    CPF: '456.209.143-01',
    originBank: 'Banco Z'
  }

  infoName = '';
  infoCPF = '';
  infoOriginBank = '';
  auth = false;
  terms = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fillInfos() {
    this.infoName = this.client.name;
    this.infoCPF = this.client.CPF;
    this.infoOriginBank = this.client.originBank;
    this.auth = true;
  }

  acceptTerms() {
    this.terms = !this.terms;
    console.log(this.terms);
  }

  goToOpenReport() {
    this.router.navigate(['/relatorio']);
  }

}
