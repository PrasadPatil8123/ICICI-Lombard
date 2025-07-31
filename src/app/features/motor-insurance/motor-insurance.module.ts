import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarInsuranceComponent,
    BikeInsuranceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class MotorInsuranceModule { }
