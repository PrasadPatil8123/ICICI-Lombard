import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  
  {path : 'motor', loadChildren: ()=> import('./features/motor-insurance/motor-insurance.module')
    .then (mod => mod.MotorInsuranceModule)
  },
  {path : 'claim', loadChildren:() => import('./features/claims/claims.module')
    .then(mod => mod.ClaimsModule)
  },
  {path : 'corporate-inc', loadChildren:() => import('./features/corporate-insurance/corporate-insurance.module')
    .then(mod => mod.CorporateInsuranceModule)
  },
  {path : 'health-inc', loadChildren:() => import('./features/health-insurance/health-insurance.module')
    .then(mod => mod.HealthInsuranceModule)
  },
  {path : 'other-inc', loadChildren:()=> import('./features/other-insurance/other-insurance.module')
    .then(mod => mod.OtherInsuranceModule)
  },
  {path : 'renewal-inc', loadChildren:()=> import('./features/renewals/renewals.module')
    .then(mod => mod.RenewalsModule)
  },
  {path : 'sme-inc', loadChildren:()=> import('./features/sme-insurance/sme-insurance.module')
    .then(mod => mod.SmeInsuranceModule)
  },
  {path : 'travel-inc', loadChildren:()=> import('./features/travel-insurance/travel-insurance.module')
    .then(mod => mod.TravelInsuranceModule)
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
