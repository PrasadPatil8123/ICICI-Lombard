import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkmensComponentComponent } from './workmens-component/workmens-component.component';
import { GroupHealthInsComponent } from './group-health-ins/group-health-ins.component';
import { Router, RouterModule, Routes } from '@angular/router';

  
const router :Routes=[
    {path:"workmen",component:WorkmensComponentComponent},
    {path:"group-health",component:GroupHealthInsComponent},
]



@NgModule({
  declarations: [
    WorkmensComponentComponent,
    GroupHealthInsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class SmeInsuranceModule { }
