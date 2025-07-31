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
import { HeaderComponent } from './common/header/header.component';
// import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './common/home/home.component';
import { MainInterInterceptor } from './shared/interceptor/main-inter.interceptor';
import { CarInsuranceComponent } from './features/motor-insurance/car-insurance/car-insurance.component';
import { ClaimsModule } from './features/claims/claims.module';
import { MotorInsuranceModule } from './features/motor-insurance/motor-insurance.module';
import { ClaimsRoutingModule } from './features/claims/claims-routing.module';

// import { SmeInsuranceModule } from './features/sme-insurance/sme-insurance.module';


import { SmeInsuranceModule } from './features/sme-insurance/sme-insurance.module';
import { SafeUrlPipe } from './features/sme-insurance/health-nested-compo/pipe.pipe';

// import { CarInsuranceComponent } from './features/motor-insurance/car-insurance/car-insurance.component';



@NgModule({
  declarations: [
    AppComponent,
    // FooterComponent,
    // NavbarComponent,

    PipesPipe,

    // CarInsuranceComponent,

    HeaderComponent,
    HomeComponent,
    // CarInsuranceComponent
  ],
  imports: [

    BrowserModule,
    // Footer2Component,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    ClaimsRoutingModule,
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    ClaimsModule,
    MotorInsuranceModule


    ClaimsRoutingModule,


    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    SmeInsuranceModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }