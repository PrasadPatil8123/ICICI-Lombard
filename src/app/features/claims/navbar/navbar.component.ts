import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // navbar.signal.ts

  constructor(private roture: Router) { }


  public imgIcici: string = "../../../../assets/claimsModuleImages/il-logo.png";
  public imgCallIcon: string = "../../../../assets/claimsModuleImages/call-us-ico.png";

  topMenu = [
    {
      label: 'Become an advisor',
      dropdown: true,
      options: [
        { label: 'Know about Agent and PoSP', route: '/' },
        { label: 'Become an Agent', route: '/' },
        { label: 'Become a PoSP', route: '/' },
      ]
    },
    {
      label: 'Renewals',
      dropdown: true,
      options: [
        { label: 'All Policy Renewals', route: '/' },
        { label: 'Car Policy', route: '/' },
        { label: 'Bike Policy', route: '/' },
        { label: 'Health Policy', route: '/' },
      ]
    },
    {
      label: 'Support',
      dropdown: true,
      options: [
        { label: 'Contact Us', route: '/' },
        { label: 'Grievance Redressa ', route: '/' },
        { label: 'Counter Offer Acceptance', route: '/' },
      ]
    },
    {
      label: 'Info Centre',
      dropdown: true,
      options: [
        { label: 'Info Center', route: '/' },
        { label: 'Expert Blog', route: '/' },
        { label: 'FAQs', route: '/' },
        { label: 'Tax Benefits', route: '/' },
        { label: 'Downloads', route: '/' },
      ]
    },
    {
      label: 'Investor Relations',
      dropdown: false,
      route: '/investors'
    }
  ];


  navItems = [
    { label: 'Health Claims', route: '/health-claims' },
    { label: 'File a claim', route: '/file-claim' },
    { label: 'Partner Hospital', route: '/partner-hospital' },
    { label: 'Downloads', route: '/downloads' },
    { label: 'Hospital Login', route: '/hospital-login' },
    { label: 'Support', route: '/support' }
  ];

}
