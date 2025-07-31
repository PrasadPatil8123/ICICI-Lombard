import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TravelInsuranceModule } from './features/travel-insurance/travel-insurance.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
import { ClaimsRoutingModule } from './features/claims/claims-routing.module';
// import { CarInsuranceComponent } from './features/motor-insurance/car-insurance/car-insurance.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [
    AppComponent,
    // FooterComponent,
    // NavbarComponent,
    PipesPipe,
    HeaderComponent,
    HomeComponent,

    // CarInsuranceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    // Footer2Component,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ClaimsRoutingModule,
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule
    

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:MainInterInterceptor,
    multi:true
    },

    TravelInsuranceModule,
    AppRoutingModule,
    HttpClientModule,
    
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
