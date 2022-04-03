import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private router: Router, private service: AppService) {}

  ngOnInit(): void {
    this.service.fetchOpenAPI().subscribe(data => {
      this.data = data;
    });
  }

  goToOpenAnalysis() {
    this.router.navigate(['/autenticacao']);
  }
}
