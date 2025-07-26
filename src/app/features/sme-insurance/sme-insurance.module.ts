import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SmeInsuranceComponent } from 'src/app/sme-insurance/sme-insurance.component';
import { MarineInsuranceComponent } from 'src/app/marine-insurance/marine-insurance.component';

const router: Routes =[
  {path:"smecomponents",component:SmeInsuranceComponent},
  {path:"marinecomponents",component:MarineInsuranceComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class SmeInsuranceModule { }
