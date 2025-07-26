import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'claims', loadChildren: () => import('./features/claims/claims.module')
      .then(mod => mod.ClaimsModule)
  },{
    path: 'sme', loadChildren: () => import('../app/features/sme-insurance/sme-insurance.module')
      .then(mod => mod.SmeInsuranceModule)
  },{
    path: 'dbrd', loadChildren: () => import('./features/claims/claims.module')
      .then(mod => mod.ClaimsModule)
  },{
    path: 'rsk', loadChildren: () => import('./features/corporate-insurance/corporate-insurance.module')
      .then(mod => mod.CorporateInsuranceModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
