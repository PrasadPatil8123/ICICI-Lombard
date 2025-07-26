import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {path : 'claim', loadChildren:() => import('./features/claims/claims.module')
    .then(mod => mod.ClaimsModule)
  },


 {path:"sme",loadChildren:()=>
  import('../app/features/sme-insurance/sme-insurance.module')
  .then((mod)=>mod.SmeInsuranceModule)
 },


  {path : 'dashboard', loadChildren:() => import('./common/dashboard/dashboard.module')
    .then(mod=>mod.DashboardModule)

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
