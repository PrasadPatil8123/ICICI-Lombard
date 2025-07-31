import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CanMatchGuard } from './features/sme-insurance/guards.guard';

// 
const routes: Routes = [

  {path:"sme",loadChildren:()=>import('./features/sme-insurance/sme-insurance.module')
    .then((mod)=>mod.SmeInsuranceModule),
    // canMatch:[CanMatchGuard]
  },
    
    {
    path: 'crpr', loadChildren: () => import('./features/corporate-insurance/corporate-insurance.module')
        .then(mod => mod.CorporateInsuranceModule)
    },
  {
    path: 'claims', loadChildren: () => import('./features/claims/claims.module')
      .then(mod => mod.ClaimsModule)
  },
  {
    path: 'motor', loadChildren: () => import('./features/motor-insurance/motor-insurance.module')
      .then(mod => mod.MotorInsuranceModule)
  },
   {
    path: 'dashboard', loadChildren: () => import('./common/dashboard/dashboard.module')
      .then(mod => mod.DashboardModule)
  },
   {
    path: 'renewals', loadChildren: () => import('./features/renewals/renewals.module')
      .then(mod => mod.RenewalsModule)
  },
   {
    path: 'abc', loadChildren: () => import('./features/travel-insurance/travel-insurance.module')
      .then(mod => mod.TravelInsuranceModule)
  },


//  {
//     path: '**',
//     redirectTo: '/dashboard',
//     pathMatch: 'full'
//   }

];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
