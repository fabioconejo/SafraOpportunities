import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { OpenAnalysisComponent } from './views/open-analysis/open-analysis.component';
import { OpenReportComponent } from './views/open-report/open-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafraHeaderComponent } from './partials/safra-header/safra-header.component';
import { SafraFooterComponent } from './partials/safra-footer/safra-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpenAnalysisComponent,
    OpenReportComponent,
    SafraHeaderComponent,
    SafraFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
