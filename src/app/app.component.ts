import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'icici-lombard';

  constructor() {
    sessionStorage.setItem('token', '6dcba45g39cf6h8559floghh55ff77');
  }

  // Top Nav Images
  public callUsImg: any = "../assets/nav-images/call-us-ico (1).png";
  public callBackImg: any = "../assets/nav-images/call-back-ico2.png";

  // Top Menu Items
  public topMenuList: any = [
    {
      Title: 'Support',
      SubMenueList: ['Contact Us', 'Grievance Redressal', 'Counter Offer Acceptance'],
      isSelected: false
    },
    {
      Title: 'Info Centre',
      SubMenueList: ['Info Centre', 'Expert Blogs', 'FAQs', 'Tax Benefits', 'Downloads', 'Corporate India Risk Index',
        'Testimonials', 'Knowledge Centre', 'IL Cafe Podcast', 'Blog', 'Cashless Garages', 'Cashless Hospital'
      ],
      isSelected: false
    },
    {
      Title: 'Investor Relation',
      isSelected: false
    },
    {
      Title: 'Become an advisor',
      SubMenueList: ['Know about Agent and PoS', 'Become an Agent', 'Become a PoSP'],
      isSelected: true
    },
  ];

  // Second Navbar Logo
  public iciLogo: any = "../assets/nav-images/il-logo.png";

  // Second Nav Menu Items (Linked to Routing)
  secondNavMenueList = [
   
    {
      title: 'Health Insurance',
      submenu: [
        { name: 'Employee Details', route: '/sme-inc/emp-d' },
        { name: 'Claim Video', route: '/sme/claim-vdo' }
      ]
    },
    {
      title: 'Motor Insurance',
      submenu: [
        { name: 'Motor Insurance Home', route: '/motor' }
      ]
    },
    {
      title: 'Travel Insurance',
      submenu: [
        { name: 'Travel Insurance Home', route: '/travel-inc' }
      ]
    },
     {
      title: 'SME Insurance',
      submenu: [
        { name: 'Workmen Compensation', route: '/sme/workmen' },
        { name: 'Group Health Insurance', route: '/sme/group-health' },
        { name: 'Marine Insurance', route: '/sme/marine' }
      ]
    },
    {
      title: 'Corporate Insurance',
      submenu: [
        { name: 'Corporate Insurance Home', route: '/corporate-inc' }
      ]
    },
    {
      title: 'Renewals',
      submenu: [
        { name: 'Renewal Insurance Home', route: '/renewal-inc' }
      ]
    },
    {
      title: 'Other Insurance',
      submenu: [
        { name: 'Other Insurance Home', route: '/other-inc' }
      ]
    }
  ];

  public isShow: any = true;
  dblclick() {
    this.isShow = false;
  }
  click() {
    this.isShow = true;
  }
}
