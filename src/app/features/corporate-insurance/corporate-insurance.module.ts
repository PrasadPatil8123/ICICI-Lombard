import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskManagementComponent } from './risk-management/risk-management.component';
import { Routes } from '@angular/router';

 let route :Routes=[
   {path:"rskk",component:RiskManagementComponent}
 ]


@NgModule({
  declarations: [RiskManagementComponent],
  exports: [RiskManagementComponent],  
  imports: [CommonModule]
})
export class CorporateInsuranceModule {}

