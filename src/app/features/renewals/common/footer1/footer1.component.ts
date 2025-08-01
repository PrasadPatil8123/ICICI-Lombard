import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Footer1Component {

  public footerData: any = [
    {
      title: "Products",
      links: [
        "Employee's (Workmen's) Compensation Insurance",
        "Group Health Insurance",
        "Group Personal Accident",
        "Marine Insurance",
        "Marine Single Transit Insurance",
        "Marine Open Insurance",
        "Fire Insurance",
        "ICICI Bharat Sookshma Udyam Suraksha Policy(Fire Insurance upto 5 crore)",
        "ICICI Bharat Griha Raksha Policy(Housing Society)",
        "ICICI Bharat Laghu Udyam Suraksha Policy(Fire Insurance 5 crore to 50 crore)",
        "Merchant's Cover III (Shop Insurance)",
        "Risk Management",
        "Professional Indemnity Policy For Doctors & Medical Practitioners",
        "Professional Indemnity Chartered Accountants",
        "Public Liability Insurance",
        "Corporate Cyber Insurance",
        "Directors & Officers Insurance",
        "Comprehensive General Liability Insurance",
        "Contractor's All Risk",
        "Contractor’s Plant & Machinery Insurance",
        "Erection All Risk",
        "Drone Insurance",
        "Event Insurance"],
        inline:false
    },

    {
      title: "Services",
      links: [
        "Endorsements",
        "Renewals"
      ],
      inline: true
    },

    {
      title: "Legal",
      links: ["Privacy Policy"],
      inline: true
    },

    {
      title: "Others",
      links: [
        "Sitemap",
        "Become an Agent",
        "Blogs on Business Insurance",
        "List of Agents",
        "List of BlackListed Agents",
        "Corporate Claims"],
        inline: false
    }
  ]

}
