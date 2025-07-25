import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskManagementComponent } from './risk-management/risk-management.component';




@NgModule({
  declarations: [RiskManagementComponent],
  exports: [RiskManagementComponent],  
  imports: [CommonModule]
})
export class CorporateInsuranceModule {}

