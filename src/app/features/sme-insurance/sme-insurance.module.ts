import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarineInsuranceComponent } from './marine-insurance/marine-insurance.component';
import { SmeInsuranceComponent } from './sme-insurance/sme-insurance.component';
import { WorkmensComponentComponent } from './workmens-component/workmens-component.component';
import { GroupHealthInsComponent } from './group-health-ins/group-health-ins.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Footer2Component } from 'src/app/common/all footer/footer2/footer2.component';
import { ReactiveFormsModule } from '@angular/forms';
const router: Routes =[
  {path:"smecomponents",component:SmeInsuranceComponent},
  {path:"marinecomponents",component:MarineInsuranceComponent}
]

const routes: Routes = [
  { path: 'smecomponents', component: SmeInsuranceComponent },
  { path: 'marinecomponents', component: MarineInsuranceComponent }
];

@NgModule({
  declarations: [
    SmeInsuranceComponent,
    MarineInsuranceComponent,
    WorkmensComponentComponent,
    GroupHealthInsComponent,
    NavbarComponent,
    // Footer2Component
  ],
  imports: [
    Footer2Component,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SmeInsuranceModule { }