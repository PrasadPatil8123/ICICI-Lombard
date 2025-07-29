import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import {// Footer1Component, FooterComponent } from './common/all footer/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Footer2Component } from './common/all footer/footer2/footer2.component';
import { PipesPipe } from './shared/pipes/pipes.pipe';
import { DirectivesDirective } from './shared/directives/directives.directive';
import { HeaderComponent } from './common/header/header.component';
// import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './common/home/home.component';
import { CarInsuranceComponent } from './features/motor-insurance/car-insurance/car-insurance.component';
import { ClaimsModule } from './features/claims/claims.module';
// import { CarInsuranceComponent } from './features/motor-insurance/car-insurance/car-insurance.component';



@NgModule({
  declarations: [
    AppComponent,
    // FooterComponent,
    // NavbarComponent,
    PipesPipe,
    DirectivesDirective,
    HeaderComponent,
    HomeComponent,
    // CarInsuranceComponent
  ],
  imports: [
  
    BrowserModule,
    Footer2Component,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // ClaimsRoutingModule,
  

    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
