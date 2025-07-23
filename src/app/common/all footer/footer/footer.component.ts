import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
footerData1 = [
    {
      title: 'Products',
      links: [
        'Motor Insurance', 'Car Insurance', 'Two Wheeler Insurance', 'Health Insurance',
        'Health AdvantEdge', 'Elevate', 'MaxProtect', 'Activate Booster (Combo*)',
        'Activate Booster', 'Personal Accident Insurance', 'Arogya Sanjeevani Policy, ICICI Lombard',
        'Travel Insurance', 'Single Trip Travel', 'Multi Trip Travel',
        'International travel insurance', 'Marine Insurance', 'NRI Insurance Services',
        'Business Insurance', 'Third Party Insurance', 'Crop Insurance', 'Rural Insurance',
        'Cyber Insurance', 'ICICI Bharat Griha Raksha Policy'
      ]
    },
    {
    title: 'PMFBY',
    links: [
      'Pradhan Mantri Fasal',
      'Bima Yojana',
      'Toll Free No: 1800 266 9725',
      '(Available 9 Am To 9 Pm)'
    ]
  }
   
  
  ];

  footerData2=[
    {
      title: 'Services',
      links: [
        'Customer Support', 'Citizen Charter', 'Grievance Redressal', 'Retrieve Quote',
        'Unclaimed Amount', 'Intimate PA claim', 'Track Claim', 'Marine/Property Claims',
        'Live Chat', 'Renew Your Policy', 'Portability', 'Whatsapp Notification',
        'EIA', 'Customer Feedback', 'Contact Us', 'Online Dispute Resolution Portal for Investors'
      ]
    },
    {
      title: 'IL TakeCare app',
      images: [
        { src: '../assets/img/playstore.png', alt: 'Google Play' },
      ]
    }
    
  ]
  footerData3=[ 
    {
      title: 'Legal',
      links: [
        'Privacy Policy', 'Insure App Privacy Policy', 'Products Withdrawn', 'Do Not Call Registry',
        'General Terms & Conditions', 'Disclaimer', 'Insurance Ombudsman', 'Stewardship Policy',
        'Disclosure under Stewardship Policy', "Policy for Policyholder’s Interest Protection & Grievance Redressal",
        'Advisory to Customer and Channel Partners', 'ICICI Lombard Product List',
        'GRO Details of Active Branches', 'Motor Third Party claims - Statewise nodal officer details',
        'Whistle Blower Policy'
      ]
    }, 
    {
      title: 'Info Centre',
      links: ['Expert Blog', 'Insurance Information', 'Infocentre', 'FAQ']
    },
   
  ]
  footerData4=[{
      title: 'About Us',
      links: ['Overview', 'Promoters', 'CSR', 'Risk Management', 'Public Disclosures']
    },
   {
      title: 'Data on Health Claim Service Indicators',
      links: ['April 2025', 'May 2025', 'June 2025']
    },
   {
      title: 'Others',
      links: [
        'Agents Portal', 'Corporate Login', 'Careers', 'Online Manager', 'Suspended Agents',
        'BAGI Blacklisted Agents', 'Distribution Channels', 'Sitemap',
        'Pradhan Mantri Suraksha Bima Yojana', 'Crop Insurance - Login',
        'Hospital Empanelment criteria', 'Account Aggregator', 'International Business (IIO)'
      ]
    },
  ]


    // ---------------------
    activeIndex: number | null = null;

toggleSection(index: number): void {
  this.activeIndex = this.activeIndex === index ? null : index;
}



footerData = [
  {
    title: 'Products',
    links: [ 'Motor Insurance', 'Car Insurance', 'Two Wheeler Insurance', 'Health Insurance',
        'Health AdvantEdge', 'Elevate', 'MaxProtect', 'Activate Booster (Combo*)',
        'Activate Booster', 'Personal Accident Insurance', 'Arogya Sanjeevani Policy, ICICI Lombard',
        'Travel Insurance', 'Single Trip Travel', 'Multi Trip Travel',]
  },
  {
    title: 'Services',
    links: ['Customer Support', 'Citizen Charter', 'Grievance Redressal', 'Retrieve Quote',
        'Unclaimed Amount', 'Intimate PA claim', 'Track Claim', 'Marine/Property Claims',
        'Live Chat', 'Renew Your Policy', 'Portability', 'Whatsapp Notification',]
  },
   {
    title: 'About Us',
    links: ['Overview', 'Promoters', 'CSR', 'Risk Management', 'Public Disclosures']
  },

  {
      title: 'Info Centre',
      links: ['Expert Blog', 'Insurance Information', 'Infocentre', 'FAQ']
    },
  {
      title: 'Data on Health Claim Service Indicators',
      links: ['April 2025', 'May 2025', 'June 2025']
    },

   {
      title: 'Legal',
      links: [
        'Privacy Policy', 'Insure App Privacy Policy', 'Products Withdrawn', 'Do Not Call Registry',
        'General Terms & Conditions', 'Disclaimer', 'Insurance Ombudsman', 'Stewardship Policy',
        'Disclosure under Stewardship Policy', "Policy for Policyholder’s Interest Protection & Grievance Redressal",
        'Advisory to Customer and Channel Partners', 'ICICI Lombard Product List',
        'GRO Details of Active Branches', 'Motor Third Party claims - Statewise nodal officer details',
        'Whistle Blower Policy'
      ]
    }, 

   {
      title: 'Others',
      links: [
        'Agents Portal', 'Corporate Login', 'Careers', 'Online Manager', 'Suspended Agents',
        'BAGI Blacklisted Agents', 'Distribution Channels', 'Sitemap',
        'Pradhan Mantri Suraksha Bima Yojana', 'Crop Insurance - Login',
        'Hospital Empanelment criteria', 'Account Aggregator', 'International Business (IIO)'
      ]
    },
     {
    title: 'PMFBY',
    links: [
      'Pradhan Mantri Fasal',
      'Bima Yojana',
      'Toll Free No: 1800 266 9725',
      '(Available 9 Am To 9 Pm)'
    ]
  },

 {
      title: 'IL TakeCare app',
      images: [
        { src: '../assets/img/playstore.png', alt: 'Google Play' },
      ]
    }
];


}
