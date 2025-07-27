import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PoliciesComponent } from './policies/policies.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { PaymentsComponent } from './payments/payments.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SavedQuotesComponent } from './saved-quotes/saved-quotes.component';
import { CardModule } from 'primeng/card';

const routes: Routes = [
 {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'policies', component:PoliciesComponent},
      { path: 'payments',component:PaymentsComponent},
      { path: 'savedquotes' ,component:SavedQuotesComponent}
    ]
  }
];

@NgModule({
  declarations: [
    SideNavComponent,
    DashboardComponent,
    UsersComponent,
    PoliciesComponent,
    PaymentsComponent,
    SavedQuotesComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    
    MenuModule,
    ButtonModule,
    TabViewModule,
    PanelModule,
    ToastModule,
    CardModule,
    RouterModule.forChild(routes)
  ],
  providers:[MessageService]
})
export class DashboardModule { }
