import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {LandingComponent} from './landing/landing.component';
import { BeginComponent } from './begin/begin.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'begin',
    component: BeginComponent
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
