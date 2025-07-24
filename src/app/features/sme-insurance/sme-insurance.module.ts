import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkmensComponentComponent } from './workmens-component/workmens-component.component';
import { GroupHealthInsComponent } from './group-health-ins/group-health-ins.component';



@NgModule({
  declarations: [
    WorkmensComponentComponent,
    GroupHealthInsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SmeInsuranceModule { }
