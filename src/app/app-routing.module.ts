import { OpenReportComponent } from './views/open-report/open-report.component';
import { OpenAnalysisComponent } from './views/open-analysis/open-analysis.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'autenticacao', component: OpenAnalysisComponent },
  { path: 'relatorio', component: OpenReportComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
