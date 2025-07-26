import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';



@NgModule({
  declarations: [
    CarInsuranceComponent,
    BikeInsuranceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MotorInsuranceModule { }
