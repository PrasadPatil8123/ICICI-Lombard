import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPolicyComponent } from './all-policy/all-policy.component';

import { BikeComponent } from './bike/bike.component';
import { HealthComponent } from './health/health.component';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './shared/button/button.component';
import { CarBikeComponent } from './common/car-bike/car-bike.component';
import { AllHealthComponent } from './common/all-health/all-health.component';
import { DisclaimersComponent } from './common/disclaimers/disclaimers.component';


const routes:Routes = [
  {path:"all_policy" , component: AllPolicyComponent},
  {path: "car", component:CarComponent},
  {path: "bike", component:BikeComponent},
  {path: "health", component:HealthComponent},
  {path: "disclaimers", component:DisclaimersComponent}
  
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
   
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule,
    ButtonModule,
    RadioButtonModule
  ]
})
export class RenewalsModule { }
