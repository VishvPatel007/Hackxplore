import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BeginComponent } from './begin/begin.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavBarComponent,
    BeginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
