import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

   topMenu = [
  {
    label: 'Employee Benefit ',
    options: [
      { label: 'Employee Benefit Insurance', route: '/' },
      { label: 'Emoloyee (Workmen`s) Compensation ', route: '/' },
      { label: 'Group Health insurance', route: '/' },
      { label: 'Group Personal Accident ', route: '/' }
    ]
  },
  {
    label: 'Marine Insurance ',
    options: [
      { label: 'Marine Insurance', route: '/' },
      { label: 'Marine Single Transit Insurance', route: '/faqs' },
      { label: 'Marine Insurance', route: '/' }
    ]
  },
  {
    label: 'Property Insurance ',
    options: [
      { label: 'Property Insurancee', route: '/' },
      { label: 'fire Insurance', route: '/' },
      { label: 'Fire Insurance(upto 5 crore ', route: '/' },
      { label: 'Fire Insurance( 5 crore upto 5 crore ', route: '/' },
      { label: 'Binding Insurance ', route: '/' },
      { label: 'Shop Insurance ', route: '/' },
      { label: 'Risk Management ', route: '/' },
    ]
  },
  {
    label: 'Liability Insurance  ',
    options: [
      { label: 'Liability Insurance', route: '/' },
      { label: 'Public Liability Insurance', route: '/' },
      { label: 'Corporete Cyber Insurance', route: '/' },
      { label: 'Directore & Offerce Insurance ', route: '/' },
      { label: 'Corporete Cyber Insurance', route: '/' },
      { label: 'Conprehensive General laibility Insurance', route: '/' }
    ]
  },
  {
    label: 'Engineering Insurance ',
    options: [
      { label: 'Engineering Insurance ', route: '/' },
      { label: 'Contractors All Risk', route: '/' },
      { label: 'Contractors Plant Machinery Insurance', route: '/' },
      { label: 'Erection All Risk', route: '/' },
    ]
  },
  {
    label: 'Other Insurance  ',
    options: [
      { label: 'Drone Insurance', route: '/' },
      { label: 'Event Insurance', route: '/' },
    ]
  }
  
 

 

 

 


];

  



}
