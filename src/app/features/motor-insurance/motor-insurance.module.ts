import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MotorClaimsComponent } from '../claims/motor-claims/motor-claims.component';
   
let route :Routes=[
  {path:"car-ins",component:CarInsuranceComponent},
  {path:"motor-ins",component:MotorClaimsComponent}
]


@NgModule({
  declarations: [
    CarInsuranceComponent,
    BikeInsuranceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ]
})
export class MotorInsuranceModule { }
