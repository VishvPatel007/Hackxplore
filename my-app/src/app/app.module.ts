import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BeginComponent } from './begin/begin.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { MapComponent } from './map/map.component';
import {AgmCoreModule} from '@agm/core';
import { AgmOverlays } from 'agm-overlays';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavBarComponent,
    BeginComponent,
    ConfirmationComponent,
    SuccessComponent,
    DashboardComponent,
    ReportComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKDu8ti6WtofsN6S5oH8GByrZL0zasCVs' + '&libraries=visualization',
      libraries: ["places"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
