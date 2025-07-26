// features/claims/claims-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthClaimsComponent } from './health-claims/health-claims.component';
import { MotorClaimsComponent } from './motor-claims/motor-claims.component';
import { PartnerHospitalComponent } from './partner-hospital/partner-hospital.component';

import { Navbar2Component } from './navbar2/navbar2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TravelClaimsComponent } from './travel-claims/travel-claims.component';
import { HomeClaimsComponent } from './home-claims/home-claims.component';
import { CorpClaimsComponent } from './corp-claims/corp-claims.component';

const routes: Routes = [
    { path: 'health-claims', component: HealthClaimsComponent },
    { path: 'motor-claims', component: MotorClaimsComponent },
    { path: 'partner', component: PartnerHospitalComponent }, 
    { path: 'navbar', component: NavbarComponent },
    { path: 'navbar2', component: Navbar2Component },
    { path: 'travel', component: TravelClaimsComponent },
    { path: 'motor', component: MotorClaimsComponent },
    { path: 'home-claims', component: HomeClaimsComponent },
    { path: 'corp-claims', component : CorpClaimsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClaimsRoutingModule { }
