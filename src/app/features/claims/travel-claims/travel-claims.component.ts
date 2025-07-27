import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  route: string | null;
  icon?: string;
}

@Component({
  selector: 'app-travel-claims',
  templateUrl: './travel-claims.component.html',
  styleUrls: ['./travel-claims.component.css']
})
export class TravelClaimsComponent {
  public img: string = "../../../../assets/claimsModuleImages/travel.jpg";

  public mail: any = "icicilombard@falck.com";
  public customersMail:any ="customersupport@icicilombard.com"

  isPanelOpen = false;

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
  footerSections: {
     title: string;
    links: FooterLink[];
    }[] = [
      {
        title: 'PRODUCTS',
        links: [
          { label: 'Motor Insurance', route: '/motor-insurance' },
          { label: 'Car Insurance', route: '/car-insurance' },
          { label: 'Two Wheeler Insurance', route: '/two-wheeler-insurance' },
          { label: 'Health Insurance', route: '/health-insurance' },
          { label: 'Health AdvantEdge', route: '/health-advantedge' },
          { label: 'Health Booster', route: '/health-booster' },
          { label: 'Personal Accident Insurance', route: '/personal-accident' },
          { label: 'Travel Insurance', route: '/travel-insurance' },
          { label: 'Home Insurance', route: '/home-insurance' },
          { label: 'Marine Insurance', route: '/marine-insurance' },
          { label: 'NRI Insurance Services', route: '/nri-insurance' },
          { label: 'Business Insurance', route: '/business-insurance' },
          { label: 'Crop Insurance', route: '/crop-insurance' },
          { label: 'Rural Insurance', route: '/rural-insurance' },
          { label: 'Cyber Insurance', route: '/cyber-insurance' }
        ]
      },
      {
        title: 'SERVICES',
        links: [
          { label: 'Customer Support', route: '/support' },
          { label: 'Grievance Redressal', route: '/grievance' },
          { label: 'Retrieve Quote', route: '/quote' },
          { label: 'Unclaimed Amount', route: '/unclaimed' },
          { label: 'Intimate Claim', route: '/intimate-claim' },
          { label: 'Track Claim', route: '/track-claim' },
          { label: 'Marine/Property Claims', route: '/marine-claims' },
          { label: 'Live Chat', route: '/chat' },
          { label: 'Renew Your Policy', route: '/renew' },
          { label: 'Whatsapp Notification', route: '/whatsapp' },
          { label: 'EIA', route: '/eia' },
          { label: 'Customer Feedback', route: '/feedback' },
          { label: 'Contact Us', route: '/contact' }
        ]
      },
      {
        title: 'LEGAL',
        links: [
          { label: 'Privacy Policy', route: '/privacy' },
          { label: 'Insure App Privacy Policy', route: '/insure-privacy' },
          { label: 'Products Withdrawn', route: '/withdrawn' },
          { label: 'Do Not Call Registry', route: '/dnc' },
          { label: 'Terms & Conditions', route: '/terms' },
          { label: 'Disclaimer', route: '/disclaimer' },
          { label: 'Whistle Blower Policy', route: '/whistle' },
          { label: 'Insurance Ombudsman', route: '/ombudsman' },
          { label: 'Surveyor Limit', route: '/surveyor' },
          { label: 'Code For Fair Disclosure', route: '/disclosure' },
          { label: 'Code Of Conduct', route: '/code-of-conduct' },
          { label: 'Stewardship Policy', route: '/stewardship' },
          { label: 'Disclosure Under Stewardship Policy', route: '/disclosure-stewardship' },
          { label: 'Policyholder’s Interest Protection Policy', route: '/protection-policy' },
        ]
      },
      {
        title: 'ABOUT US',
        links: [
          { label: 'Overview', route: '/about' },
          { label: 'Promoters', route: '/promoters' },
          { label: 'CSR', route: '/csr' },
          { label: 'Risk Management', route: '/risk-management' },
          { label: 'Public Disclosures', route: '/disclosures' }
        ]
      },
      {
        title: 'OTHERS',
        links: [
          { label: 'Agents Portal', route: '/agents' },
          { label: 'Corporate Login', route: '/corporate-login' },
          { label: 'Careers', route: '/careers' },
          { label: 'Online Manager', route: '/online-manager' },
          { label: 'Suspended Agents', route: '/suspended-agents' },
          { label: 'Corporate Agents', route: '/corporate-agents' },
          { label: 'Sitemap', route: '/sitemap' },
          { label: 'Pradhan Mantri Suraksha Bima Yojana', route: '/pmsby' },
          { label: 'Crop Insurance - Login', route: '/crop-login' }
        ]
      }
    ];

  // Optional: Social links (already shown earlier)
  socialLinks = [
    { icon: 'pi-facebook', url: 'https://facebook.com' },
    { icon: 'pi-twitter', url: 'https://twitter.com' },
    { icon: 'pi-youtube', url: 'https://youtube.com' },
    { icon: 'pi-linkedin', url: 'https://linkedin.com' }
  ];
} 
