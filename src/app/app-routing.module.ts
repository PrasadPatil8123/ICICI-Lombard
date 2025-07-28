import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"sme",loadChildren:()=>
    import('./features/sme-insurance/sme-insurance.module')
    .then((mod)=>mod.SmeInsuranceModule)},
    {
    path: 'crpr', loadChildren: () => import('./features/corporate-insurance/corporate-insurance.module')
        .then(mod => mod.CorporateInsuranceModule)
    },
  {
    path: 'claims', loadChildren: () => import('./features/claims/claims.module')
      .then(mod => mod.ClaimsModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
