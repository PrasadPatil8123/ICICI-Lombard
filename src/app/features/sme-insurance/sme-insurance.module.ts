import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkmensComponentComponent } from './workmens-component/workmens-component.component';
import { GroupHealthInsComponent } from './group-health-ins/group-health-ins.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Footer2Component } from 'src/app/common/all footer/footer2/footer2.component';
import { Footer1Component } from 'src/app/common/all footer/footer/footer.component';
import { NavbarComponent } from '../claims/navbar/navbar.component';
import { Navbar2Component } from './navbar/navbar.component';
import { MarineInsuranceComponent } from './marine-insurance/marine-insurance.component';
import { SmeInsuranceComponent } from './sme-insurance/sme-insurance.component';

  
const router :Routes=[
    {path:"workmen",component:WorkmensComponentComponent},
    {path:"group-health",component:GroupHealthInsComponent},
    {path:"marine",component:MarineInsuranceComponent},
    {path:"sme-ins",component:SmeInsuranceComponent},
]



@NgModule({
  declarations: [
    WorkmensComponentComponent,
    GroupHealthInsComponent,
    SmeInsuranceComponent,
    MarineInsuranceComponent,
    Navbar2Component,
  ],
  imports: [
    Footer2Component,
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    Footer1Component,
  ],
  exports:[Navbar2Component,]
})
export class SmeInsuranceModule { }
