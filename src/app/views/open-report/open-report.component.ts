import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-report',
  templateUrl: './open-report.component.html',
  styleUrls: ['./open-report.component.css']
})
export class OpenReportComponent implements OnInit {

    constructor() { }

    tabelaProdutos = [
        {nome: "Transferência eletrônica disponível (TED) em terminal de autoatendimento", valorSafra:"R$0,00", valorZ:"R$10,45"}, 
        {nome: "Transferência de recursos por meio de documento de crédito (DOC) em terminal de autoatendimento", valorSafra:"R$8,50", valorZ:"R$10,45"},
        {nome: "Conta de depósito à vista - Sustação de revogação", valorSafra:"R$12,00", valorZ:"R$13,95"},
        {nome: "Conta de depósito à vista - Folha de cheque", valorSafra:"R$8,50", valorZ:"R$10,45"},
        {nome: "Conta de depósito à vista - Transferência eletrônica disponível (TED) pela Internets", valorSafra:"R$1,45", valorZ:"R$1,75"},
        {nome: "Empréstimo de cheque especial - Pré-fixado", valorSafra:"8,00%", valorZ:"8,73%"},
        {nome: "Empréstimo de crédito pessoal sem consignação - Pré-fixado", valorSafra:"0,81%", valorZ:"0,90%"},
        {nome: "Empréstimo de crédito pessoal consignado - Pré-fixado", valorSafra:"1,27%", valorZ:"1,30%"},
        {nome: "Financiamento imobiliario sistema financeiro habitação sfi - Pós fixado taxa referencial (TR) taxa básica financeira (TBF)", valorSafra:"0,64%", valorZ:"0,76%"},
        {nome: "Financiamento imobiliario sistema financeiro habitação sfh - Pós fixado taxa referencial (TR) taxa básica financeira (TBF)", valorSafra:"0,70%", valorZ:"0,79%"},
        {nome: "Financiamento para aquisição de veículos automotores- Pré-fixado", valorSafra:"0,92%", valorZ:"0,99%"},
        {nome: "Adiantamento a Depositante - Concessão adiantamento a depositante", valorSafra:"R$51,00", valorZ:"R$53,00"},
        {nome: "Adiantamento a Depositante - Pré-fixado", valorSafra:"17,97%", valorZ:"18,97%"}
    ]
    ngOnInit(): void {
    }

}
