import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      { label: 'My Policies', icon: 'pi pi-folder-open', routerLink: ['/dashboard/policies'] },
      { label: 'Payments', icon: 'pi pi-credit-card', routerLink: ['/dashboard/payments'] },
      { label: 'Saved Quote', icon: 'pi pi-bookmark', routerLink: ['/dashboard/savedquotes'] }
    ];
  }
}