import { Component } from '@angular/core';

@Component({
  selector: 'app-risk-management',
  templateUrl: './risk-management.component.html',
  styleUrls: ['./risk-management.component.css']
})
export class RiskManagementComponent {
  showDropdown = false;

  toggleDropdown() {
    console.log('Dropdown clicked'); 
    this.showDropdown = !this.showDropdown;
  }
}
