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
  terms = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fillInfos() {
    this.infoName = this.client.name;
    this.infoCPF = this.client.CPF;
    this.infoOriginBank = this.client.originBank;
  }

  goToOpenReport() {
    this.router.navigate(['/relatorio']);
  }

}
