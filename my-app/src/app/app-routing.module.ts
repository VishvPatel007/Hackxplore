import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {LandingComponent} from './landing/landing.component';
import { BeginComponent } from './begin/begin.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'begin',
    component: BeginComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
