import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
  menuList = [
    {
      label: 'Products',
      dropdown: true,
      options: [
        { label: 'Health Insurance', route: '/' },
        { label: 'Motor Insurance', route: '/' },
        { label: 'Single Trip', route: '/' },
        { label: 'Gload Multi Trip ', route: '/' },
      ]
    },
    {
      label: 'Claims',
      dropdown: true,
      options: [
        { label: 'Health Claims', route: '/health-claims' },
        { label: 'Motor Claims', route: '/motor-claims' },
        { label: 'Travel Claims', route: '/travel-claims' },
        { label: 'Home Claims', route: '/home-claims' },
      ]
    },
    {
      label: 'Renewals',
      dropdown: true,
      options: [
        { label: 'All Policy renewal', route: '/renew-policy' },
        { label: 'Car Policy ', route: '/car-policy' },
        { label: 'Two Wheeler Policy', route: '/two-policy' },
        { label: 'Health Policy ', route: '/health-policy' },
      ]
    },
    {
      label: 'Support',
      dropdown: true,
      options: [
        { label: 'Contact Us', route: '/contact-us' },
        { label: 'Grievance Redressal', route: '/contact-us' },
        { label: 'Counter Offer Acceptance', route: '/contact-us' },
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
      dropdown: true,
      route: '/'
    }
  ];

}
