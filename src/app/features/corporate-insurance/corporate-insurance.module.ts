import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskManagementComponent } from './risk-management/risk-management.component';
import { RouterModule, Routes } from '@angular/router';
// import { Navbar2Component } from '../sme-insurance/navbar/navbar.component';
import { SmeInsuranceModule } from '../sme-insurance/sme-insurance.module';
import { Footer2Component } from 'src/app/common/all footer/footer2/footer2.component';
import { Footer1Component } from 'src/app/common/all footer/footer/footer.component';

 let route :Routes=[
   {path:"rsk",component:RiskManagementComponent}
 ]


@NgModule({
  declarations: [RiskManagementComponent,],
  exports: [RiskManagementComponent],  
  imports: [CommonModule, 
    SmeInsuranceModule,
    Footer2Component,

    Footer1Component,
    RouterModule.forChild(route),]
})

export class CorporateInsuranceModule {}

