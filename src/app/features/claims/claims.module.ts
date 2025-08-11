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
// import { Navbar2Component } from './navbar2/navbar2.component';
import { TravelClaimsComponent } from './travel-claims/travel-claims.component';
import { HomeClaimsComponent } from './home-claims/home-claims.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CorpClaimsComponent } from './corp-claims/corp-claims.component';
import { CommanTableComponent } from './comman-table/comman-table.component';
import { TableModule } from 'primeng/table';
import { CustomPipe } from './shared/custom.pipe';
import { Navbar2Component } from './navbar2/navbar2.component';
import { OtherImpComponent } from './other-imp/other-imp.component';
import { OtherImp2Component } from './other-imp2/other-imp2.component';
@NgModule({
  declarations: [
    HealthClaimsComponent,
    OtherImpComponent,
    MotorClaimsComponent,
    NavbarComponent,
    FooterComponent,
    PartnerHospitalComponent,
    Navbar2Component,
    TravelClaimsComponent,
    HomeClaimsComponent,
    CorpClaimsComponent,
    CommanTableComponent,
    CustomPipe,
    OtherImp2Component
    
  ],
  exports: [
    HealthClaimsComponent,Navbar2Component,OtherImp2Component
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
    
    TableModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule
  ]
})
export class ClaimsModule { }