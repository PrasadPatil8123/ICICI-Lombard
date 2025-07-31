import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkmensComponentComponent } from './workmens-component/workmens-component.component';
import { GroupHealthInsComponent } from './group-health-ins/group-health-ins.component';
import { Router, RouterModule, Routes } from '@angular/router';



import { ReactiveFormsModule } from '@angular/forms';
import { Footer2Component } from 'src/app/common/all footer/footer2/footer2.component';
import { Footer1Component } from 'src/app/common/all footer/footer/footer.component';
// import { SharedModule } from 'primeng/api/shared';

// import { Footer2Component } from 'src/app/common/all footer/footer2/footer2.component';
// import { Footer1Component } from 'src/app/common/all footer/footer/footer.component';
import { NavbarComponent } from '../claims/navbar/navbar.component';
import { Navbar3Component } from './navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { Footer2Component } from 'src/app/common/all footer/footer2/footer2.component';
import { Footer1Component } from 'src/app/common/all footer/footer/footer.component';
import { NavbarComponent } from '../claims/navbar/navbar.component';

import { MarineInsuranceComponent } from './marine-insurance/marine-insurance.component';
import { SmeInsuranceComponent } from './sme-insurance/sme-insurance.component';
import { mydeactive } from './guards.guard';
import { CardDetails1Component } from './workmen-nested-compo/card-details1/card-details1.component';

import { CardDetails2Component } from './workmen-nested-compo/card-details2/card-details2.component';
import { CardDetails3Component } from './workmen-nested-compo/card-details3/card-details3.component';
// import { Navbar2Component } from './../claims/navbar2/navbar2.component';

const router: Routes = [
  { path: "workmen", component: WorkmensComponentComponent, canDeactivate: [mydeactive] },
  { path: "group-health", component: GroupHealthInsComponent },
  { path: "marine", component: MarineInsuranceComponent },
  { path: "sme-ins", component: SmeInsuranceComponent },
  { path: "card1", component: CardDetails1Component },
  { path: "card2", component: CardDetails2Component },
  { path: "card3", component: CardDetails3Component },

import { MainCompoComponent } from './workmen-nested-compo/main-compo/main-compo.component';
import { MatineInsComponent } from './workmen-nested-compo/matine-ins/matine-ins.component';
import { EmpCompensationComponent } from './workmen-nested-compo/emp-compensation/emp-compensation.component';
import { FireInsComponent } from './workmen-nested-compo/fire-ins/fire-ins.component';
import { LiabilityInsComponent } from './workmen-nested-compo/liability-ins/liability-ins.component';
import { EngineeringInsComponent } from './workmen-nested-compo/engineering-ins/engineering-ins.component';
import { OtherInsComponent } from './workmen-nested-compo/other-ins/other-ins.component';
import { SideNavComponent } from './workmen-nested-compo/side-nav/side-nav.component';
import { GroupHealthIns2Component } from './workmen-nested-compo/group-health-ins2/group-health-ins2.component';
import { ClaimVdoComponent } from './health-nested-compo/claim-vdo/claim-vdo.component';
import { EmployeeDetailsComponent } from './health-nested-compo/employee-details/employee-details.component';
import { Navbar3Component } from './navbar/navbar.component';

  
const router :Routes=[
    {path:"workmen",component:WorkmensComponentComponent,canDeactivate:[mydeactive]},
    {path:"group-health",component:GroupHealthInsComponent,canDeactivate:[mydeactive]},
    {path:"marine",component:MarineInsuranceComponent},
    {path:"sme-ins",component:SmeInsuranceComponent},
    {path:"card1",component:CardDetails1Component},
    {path:"main",component:MainCompoComponent},
    {path:"claim-vdo",component:ClaimVdoComponent},
    {path:"emp-d",component:EmployeeDetailsComponent},

    




]



@NgModule({
  declarations: [
    WorkmensComponentComponent,
    GroupHealthInsComponent,
    SmeInsuranceComponent,
    MarineInsuranceComponent,
    CardDetails1Component,
    MainCompoComponent,
    MatineInsComponent,
    EmpCompensationComponent,
    FireInsComponent,
    LiabilityInsComponent,
    EngineeringInsComponent,
    OtherInsComponent,
    SideNavComponent,
    GroupHealthIns2Component,
    ClaimVdoComponent,
    EmployeeDetailsComponent,
    Navbar3Component,
  ],
  imports: [
    Footer1Component,
    Footer2Component,
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,

    Footer2Component,
    Footer1Component,
    Navbar3Component,
    
  ],
  exports: []

  ],
  exports:[Navbar3Component,SideNavComponent]

})
export class SmeInsuranceModule { }