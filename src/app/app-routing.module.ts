import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'claim', loadChildren:() => import('./features/claims/claims.module')
    .then(mod => mod.ClaimsModule)
  },
    {path:"renewals", loadChildren : () => import("./features/renewals/renewals.module").
    then(m => m.RenewalsModule) }
  
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
