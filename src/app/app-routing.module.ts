import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {path : 'claims', loadChildren:() => import('./features/claims/claims.module')
    .then(mod => mod.ClaimsModule)
  }
]
=======

 {path:"sme",loadChildren:()=>
  import('../app/features/sme-insurance/sme-insurance.module')
  .then((mod)=>mod.SmeInsuranceModule)
 }

];
>>>>>>> 928c04c1ca9071b8b32d0ca11747cdb0bd8f40a7

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
