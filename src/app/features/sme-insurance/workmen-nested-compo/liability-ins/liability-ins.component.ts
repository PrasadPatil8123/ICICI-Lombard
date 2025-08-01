import { Component } from '@angular/core';

@Component({
  selector: 'app-liability-ins',
  templateUrl: './liability-ins.component.html',
  styleUrls: ['./liability-ins.component.css']
})
export class LiabilityInsComponent {
images = [
     {
       src:  "../../../../../assets/sme-card/NatureAndScopeMarine.jpg",
      title: ' What are the Objectives of Marine Insurance?   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/UnderstandingMarinePrincipal.jpg",
      title: '  Intermediate Storage in Marine Insurance: What You Need to Know  ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/KeyFactorsGHIInsu.jpg",
      title: '  How Does Hull Insurance Safeguard Ship Owners from Vessel Damage? ',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/blog_know_wc.png",
      title: ' Marine Insurance Under COGSA: Protecting Your Cargo At Sea   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/blog_marine_ins_type.png",
      title: ' What are the Objectives of Marine Insurance?   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/blog_how_wc_works.svg",
      title: '  Intermediate Storage in Marine Insurance: What You Need to Know  ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/blog_imp_of_marine_ins.png",
      title: '  How Does Hull Insurance Safeguard Ship Owners from Vessel Damage? ',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/blog_how_does_marine_in_work.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/Blog_How_Event_Insurance_Can_Save_Your_Budget_from_Unexpected_Costs.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },


     {
     src:"../../../../../assets/sme-card/blog3-marine-pandi.png",
      title: '  Intermediate Storage in Marine Insurance: What You Need to Know  ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src:"../../../../../assets/sme-card/Blog4_new.png",
      title: '  How Does Hull Insurance Safeguard Ship Owners from Vessel Damage? ',
      link: 'https://www.icicilombard.com/...'
    },
    {
     src:"../../../../../assets/sme-card/blog4-ear.png",
      title: ' Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
    src:"../../../../../assets/sme-card/blog9-CAR-benefits.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
     {
    src:"../../../../../assets/sme-card/blog10-CAR.png",
      title: '  Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
    src:"../../../../../assets/sme-card/blog12-EAR.png",
      title: '  Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
   src:"../../../../../assets/sme-card/blog11-cyberIns.png",
      title: '  Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
     
    {
      src: "../../../../../assets/sme-card/7thingstoremember-02.png",
      title: ' What are the Objectives of Marine Insurance?   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/7thingstoremember-02.png",
      title: '  Intermediate Storage in Marine Insurance: What You Need to Know  ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/advantages-of-directors-and-officers-insurance.png",
      title: '  How Does Hull Insurance Safeguard Ship Owners from Vessel Damage? ',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/AdvantagesOfGroupHealthInsurance.svg",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },






    {
      src: "../../../../../assets/sme-card/BackToWorkAfterInjuryWC.jpg",
      title: ' Marine Insurance Under COGSA: Protecting Your Cargo At Sea   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/BenefitOfLiabilityInsurancecoverage.jpg",
      title: ' What are the Objectives of Marine Insurance?   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/BenefitsForInvestingCommercialProperty.png",
      title: '  Intermediate Storage in Marine Insurance: What You Need to Know  ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/BenefitsOfCPMInsu.svg",
      title: '  How Does Hull Insurance Safeguard Ship Owners from Vessel Damage? ',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/blog_fire.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/blog_dno.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },






    {
    src:"../../../../../assets/sme-card/blog_dno.png",
      title: ' Marine Insurance Under COGSA: Protecting Your Cargo At Sea   ',
      link: 'https://www.icicilombard.com/...'
    }, {
       src:"../../../../../assets/sme-card/blog_fire.png",
      title: ' What are the Objectives of Marine Insurance?   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/BenefitsForInvestingCommercialProperty.png",
      title: '  Intermediate Storage in Marine Insurance: What You Need to Know  ',
      link: 'https://www.icicilombard.com/...'
    }, {
    src:"https://v.ftcdn.net/15/76/92/25/700_F_1576922575_xfgaWNNFjiTevAXhAELBllz6BpZUlKd2_ST.mp4",
      title: '  How Does Hull Insurance Safeguard Ship Owners from Vessel Damage? ',
      link: 'https://www.icicilombard.com/...'
    },
    {
     src:"../../../../../assets/sme-card/blog_how_does_marine_in_work.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
     src:"../../../../../assets/sme-card/Blog_How_Event_Insurance_Can_Save_Your_Budget_from_Unexpected_Costs.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
   src:     "../../../../../assets/sme-card/KeyFactorsGHIInsu.jpg" , 
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },






  ];
}
