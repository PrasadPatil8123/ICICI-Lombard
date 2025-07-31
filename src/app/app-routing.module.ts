import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canmatch } from './features/sme-insurance/guards.guard';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: "sme", loadChildren: () =>
      import('./features/sme-insurance/sme-insurance.module')
        .then((mod) => mod.SmeInsuranceModule)
  },
  {
=======
  {path:"sme",loadChildren:()=>
    import('./features/sme-insurance/sme-insurance.module')
    .then((mod)=>mod.SmeInsuranceModule),
    canMatch:[canmatch]
  },
    
    {
>>>>>>> a82f9780b54c3c034f83cd4e8c8a408f057145f9
    path: 'crpr', loadChildren: () => import('./features/corporate-insurance/corporate-insurance.module')
      .then(mod => mod.CorporateInsuranceModule)
  },
  {
    path: 'claims', loadChildren: () => import('./features/claims/claims.module')
      .then(mod => mod.ClaimsModule)
  },
  {
<<<<<<< HEAD
    path: 'motor-ins', loadChildren: () => import('./features/motor-insurance/motor-insurance.module')
      .then(mod => mod.MotorInsuranceModule)
  }
=======
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
>>>>>>> a82f9780b54c3c034f83cd4e8c8a408f057145f9
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
