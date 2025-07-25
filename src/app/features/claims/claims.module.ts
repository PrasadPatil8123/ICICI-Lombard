import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthClaimsComponent } from './health-claims/health-claims.component';
import { MotorClaimsComponent } from './motor-claims/motor-claims.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ClaimsRoutingModule } from './claims-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PartnerHospitalComponent } from './partner-hospital/partner-hospital.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { TravelClaimsComponent } from './travel-claims/travel-claims.component';
import { HomeClaimsComponent } from './home-claims/home-claims.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    HealthClaimsComponent,
    MotorClaimsComponent,
    NavbarComponent,
    FooterComponent,
    PartnerHospitalComponent,
    Navbar2Component,
    TravelClaimsComponent,
    HomeClaimsComponent,
  ],
  exports: [
    HealthClaimsComponent,
    Navbar2Component,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ClaimsRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,

    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule
  ]
})
export class ClaimsModule { }
