import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPolicyComponent } from './all-policy/all-policy.component';

import { BikeComponent } from './bike/bike.component';
import { HealthComponent } from './health/health.component';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './shared/button/button.component';
import { CarBikeComponent } from './common/car-bike/car-bike.component';
import { AllHealthComponent } from './common/all-health/all-health.component';
import { DisclaimersComponent } from './common/disclaimers/disclaimers.component';
import { Footer1Component } from './common/footer1/footer1.component';
import { Footer2Component } from './common/footer2/footer2.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from "@angular/common/http";
import { NavComponent } from './common/nav/nav.component';
import { BussinessInsuranceComponent } from './bussiness-insurance/bussiness-insurance.component';
import { PolicyCardComponent } from './common/policy-card/policy-card.component'


const routes:Routes = [
  {path:"all_policy" , component: AllPolicyComponent},
  {path: "car", component:CarComponent},
  {path: "bike", component:BikeComponent},
  {path: "health", component:HealthComponent},
  {path: "disclaimers", component:DisclaimersComponent},
  {path: "bussiness", component:BussinessInsuranceComponent}
  
]

@NgModule({
  declarations: [
    AllPolicyComponent,
    CarComponent,
    BikeComponent,
    HealthComponent,
    ButtonComponent,
    CarBikeComponent,
    AllHealthComponent,
    DisclaimersComponent,
    HomeComponent,
    NavComponent,
    BussinessInsuranceComponent,
    PolicyCardComponent,
   
   
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule,
    ButtonModule,
    RadioButtonModule,
    Footer1Component,
    Footer2Component,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class RenewalsModule { }
