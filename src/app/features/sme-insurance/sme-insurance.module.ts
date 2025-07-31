import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkmensComponentComponent } from './workmens-component/workmens-component.component';
import { GroupHealthInsComponent } from './group-health-ins/group-health-ins.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

  
const router :Routes=[
    {path:"workmen",component:WorkmensComponentComponent},
    {path:"group-health",component:GroupHealthInsComponent},
]



@NgModule({
  declarations: [
    WorkmensComponentComponent,
    GroupHealthInsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule
  ]
})
export class SmeInsuranceModule { }
