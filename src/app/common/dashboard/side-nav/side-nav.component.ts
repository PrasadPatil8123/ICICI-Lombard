import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PersonalDetails } from '../services/user-view';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  personalDetails: PersonalDetails[]= []
  menuItems: MenuItem[] = [];

  constructor(private userDataService : UserDataService) {
    // this.menuItems = [
  // { label: 'Personal Details', icon: 'pi pi-user', routerLink: ['/dashboard',this.id,'users',] },
  // { label: 'My Policies', icon: 'pi pi-folder-open', routerLink: ['/dashboard',this.id, 'policies'] },
  // { label: 'Payments', icon: 'pi pi-credit-card', routerLink: ['/dashboard',this.id, 'payments'] },
  // { label: 'Saved Quote', icon: 'pi pi-bookmark', routerLink: ['/dashboard',this.id, 'savedquotes'] }
// ];
  }
  @Input() userId!: number;
  public id:any;
  ngOnInit() {
    this.id = this.userId;
    this.menuItems = [
     { label: 'Personal Details', icon: 'pi pi-user', routerLink: ['/dashboard',this.id,'users',] },
  { label: 'My Policies', icon: 'pi pi-folder-open', routerLink: ['/dashboard',this.id, 'policies'] },
  { label: 'Payments', icon: 'pi pi-credit-card', routerLink: ['/dashboard',this.id, 'payments'] },
  { label: 'Saved Quote', icon: 'pi pi-bookmark', routerLink: ['/dashboard',this.id, 'savedquotes'] }
  ];
  this.userDataService.loadUserData(this.userId).subscribe(data => {
      this.personalDetails = data.personalDetails
    });

  }
}