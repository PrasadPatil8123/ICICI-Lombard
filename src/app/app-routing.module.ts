import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { authGuard } from './core/guards/auth.guard';




const routes: Routes = [
  
  {path :"" , component : HomeComponent},

  {path:'login', component:LoginComponent},

  {path : 'motor',canActivate: [authGuard], loadChildren: ()=> import('./features/motor-insurance/motor-insurance.module')
    .then (mod => mod.MotorInsuranceModule)
  },
  {path : 'claims', loadChildren:() => import('./features/claims/claims.module')
    .then(mod => mod.ClaimsModule)
  },
  {path : 'dashboard',canActivate: [authGuard], loadChildren:() => import('./common/dashboard/dashboard.module')
    .then(mod=>mod.DashboardModule)
  },
  {path : 'corporate-inc',canActivate: [authGuard], loadChildren:() => import('./features/corporate-insurance/corporate-insurance.module')
    .then(mod => mod.CorporateInsuranceModule)
  },
  {path : 'health-inc',canActivate: [authGuard], loadChildren:() => import('./features/health-insurance/health-insurance.module')
    .then(mod => mod.HealthInsuranceModule)
  },
  {path : 'other-inc',canActivate: [authGuard], loadChildren:()=> import('./features/other-insurance/other-insurance.module')
    .then(mod => mod.OtherInsuranceModule)
  },
  {path : 'renewal-inc',canActivate: [authGuard], loadChildren:()=> import('./features/renewals/renewals.module')
    .then(mod => mod.RenewalsModule)
  },
  {path : 'sme-inc',canActivate: [authGuard], loadChildren:()=> import('./features/sme-insurance/sme-insurance.module')
    .then(mod => mod.SmeInsuranceModule)
  },
  {path : 'travel-inc',
    canActivate: [authGuard],
     loadChildren:()=> import('./features/travel-insurance/travel-insurance.module')
    .then(mod => mod.TravelInsuranceModule)
  },
 {path:"sme",canActivate: [authGuard], loadChildren:()=>
  import('../app/features/sme-insurance/sme-insurance.module')
  .then((mod)=>mod.SmeInsuranceModule)
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
