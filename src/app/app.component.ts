import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'icici-lombard';
//Top Nav-Bar
  //Top navbar images
  public callUsImg:any ="../assets/nav-images/call-us-ico (1).png";
  public callBackImg:any = "../assets/nav-images/call-back-ico2.png";

  //Top navbar menue list
  public topMenuList:any =[
    {
      Title:'Support',
      SubMenueList:['Contact Us','Grievance Redressal','Counter Offer Acceptance'],
      isSelected: false
    },
    
    {
      Title:'Info Centre',
      SubMenueList:['Info Centre','Expert Blogs','FAQs','Tax Benefits','Downloads','Corporate India Risk Index',
        'Testimonials','Knowledge Centre','IL Cafe Podcast','Blog','Cashless Garages','Cashless Hospital'
      ],
      isSelected: false
    },
    {
      Title:'Invesstor Relation',
      isSelected: false
    },
     {
      Title:'Become an advisor',
      SubMenueList:['Know about Agent and PoS','Become an Agent','Become a PoSP'],
      isSelected: true
    },
  ]
  

  //Second Navbar
  //Second Navbar Images
  public iciLogo:any = "../assets/nav-images/il-logo.png";

  public secondNavMenueList:any = [
    {
      Title:'Motor Insurance',
      SubMenueList:['Car Insurance','Bike Insurance','Motor Floater','Motor Insurance'],
      Img:'../assets/nav-images/motor-navigation.png',
      Link:'motor'
    },
    {
      Title:'test code',
      Img:'../assets/nav-images/motor-navigation.png',
      SubMenueList: [
      { label: 'Employee Benefit Insurance', route: '#' },
      { label: 'Emoloyee (Workmen`s) Compensation ', route: '/' },
      { label: 'Group Health insurance', route: '/' },
      { label: 'Group Personal Accident ', route: '/' },
    ]
    },
     {
      Title:'Health Insurance',
      SubMenueList:['Health Insurance','Elevate','MaxProtect','Activate Booster','Health AdbantEdge','Personal Protect',
        'Golden Shield','Aroghya Sanjeevani Policy, ICICI Lombart','Corona Kavach Policy, ICICI Lombart','Saral Suraksha Bima, ICICI Lombard'
      ],
      Img:'../assets/nav-images/health-menu-ico-navigation.png',
      Link:'health-inc'
    },
     {
      Title:'Travel Insurance',
      SubMenueList:['Travel Insurance','Single Trip','Gold Multi Trip','Student Travel'],
      Img:'../assets/nav-images/travel-navigation.png',
      Link:'travel-inc'
    },
     {
      Title:'SME Insurance',
      SubMenueList:['SME Insurance','Marine Transit','Workmen`s Compensation','Group Health Insurance','File Insurance - Sookshma',
        'Marine Open Insurance','Fire Insurance - Griha for Housing Societies','Professional Indemnity Policy for Medical Practitioners'
      ],
      Img:'../assets/nav-images/sme-insurance-icon-navigation.svg',
      Link:'sme-inc'
    },
    {
      Title:' Corporate Insurance ',
      SubMenueList:['Product','Risk Management','Claims','Ditital Solutions'],
      Img:'../assets/nav-images/corporate-insurance-icon.svg',
      Link:'corporate-inc'
    },
    {
      Title:' Other Insurance ',
      SubMenueList:['Crop Insurance','NRI Insurance','Cyber Insurance','ICICI Bharat Griha Raksha Policy','Complete Home Protect'],
      Img:'../assets/nav-images/other-menu-ico-navigation.png',
      Link:'other-inc'
    },
    {
      Title:' Renewals',
      SubMenueList:['All policy renewal','Car Policy','Bike Policy','Health Policy','Home Policy','Travel Policy','Business Insurance'],
      Img:'../assets/nav-images/renewal-navigation.png',
      Link:'renewal-inc'
    },
     {
      Title:' Claims',
      SubMenueList:['Health Claims','Motor Claims','Travel Claims','Home Claims','Cyber Insurance Claims'],
      Img:'../assets/nav-images/renewal-navigation.png',
      Link:'claim'
    },
  ]

  public isShow:any = true;
  dblclick(){
    this.isShow = false;
  }
  click(){
    this.isShow = true;
  }
}