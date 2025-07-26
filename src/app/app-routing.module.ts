import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'claims', loadChildren: () => import('./features/claims/claims.module')
      .then(mod => mod.ClaimsModule)
  },
   {
    path: 'rsk', loadChildren: () => import('../app/features/corporate-insurance/corporate-insurance.module')
      .then(mod => mod.CorporateInsuranceModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
