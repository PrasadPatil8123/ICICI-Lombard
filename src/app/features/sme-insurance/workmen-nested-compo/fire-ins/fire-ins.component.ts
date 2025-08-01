import { Component } from '@angular/core';

@Component({
  selector: 'app-fire-ins',
  templateUrl: './fire-ins.component.html',
  styleUrls: ['./fire-ins.component.css']
})
export class FireInsComponent {
images = [
  {
         src:"../../../../../assets/sme-card/DirectedProtectedByLiabilityInsurance.jpg"  ,
      title: 'Why Insuring Your Household Items During Transit is Essential',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src:     "../../../../../assets/sme-card/CyberInsuranceExplained.jpg"  ,
      title: 'Customising Marine Insurance Policies to Fit Your Needs',
      link: 'https://www.icicilombard.com/...'
    },
    {
         src:  "../../../../../assets/sme-card/GHIEssentialForTechStartup.png",
      title: 'Why Insuring Your Household Items During Transit is Essential',
      link: 'https://www.icicilombard.com/...'
    },


    
    {
         src:"../../../../../assets/sme-card/corporate-cyber-insurance.png",
      title: 'Why Insuring Your Household Items During Transit is Essential',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src:"../../../../../assets/sme-card/CorporateEventInsurance.svg",
      title: 'Customising Marine Insurance Policies to Fit Your Needs',
      link: 'https://www.icicilombard.com/...'
    },
    {
         src:"../../../../../assets/sme-card/CustomizedGHIplan.png",
      title: 'Why Insuring Your Household Items During Transit is Essential',
      link: 'https://www.icicilombard.com/...'
    },
     {
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
    src:"../../../../../assets/sme-card/blog_ghi_adv.png",
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
    src:"../../../../../assets/sme-card/blog_know_wc.png",
      title: ' Marine Insurance Under COGSA: Protecting Your Cargo At Sea   ',
      link: 'https://www.icicilombard.com/...'
    }, {
        src:"../../../../../assets/sme-card/blog_marine_ins_type.png",
      title: ' What are the Objectives of Marine Insurance?   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src:"../../../../../assets/sme-card/blog_how_wc_works.svg",
      title: '  Intermediate Storage in Marine Insurance: What You Need to Know  ',
      link: 'https://www.icicilombard.com/...'
    }, {
     src:"../../../../../assets/sme-card/blog_imp_of_marine_ins.png",
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
    src:"../../../../../assets/sme-card/blog_marine_ins_type.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },{
    src:"../../../../../assets/sme-card/blog_how_does_marine_in_work.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
  ];
}



// <img    
// <img      
// <img      src:"../../../../../assets/sme-card/Cyber_Insurance_for_Your_Business.svg">
// <img      src:"../../../../../assets/sme-card/Cyber_Insurance_Shields_Your_Business.png">
// <img      src:"../../../../../assets/sme-card/CyberInsurancePartOfBusinessStrategy.jpg">
// <img      src:"../../../../../assets/sme-card/CyberInsuranceExplained.jpg">
// <img      src:"../../../../../assets/sme-card/Deciphering_International_Cargo.svg">
// <img      src:"../../../../../assets/sme-card/DiffBetGroupHealthInsuranceVsIndividualHealthInsuranceCoverage.svg">
// <img      src:"../../../../../assets/sme-card/DiffGPAvsGHI.svg">
// <img      src:"../../../../../assets/sme-card/DirectAndOfficerVSGenLiabilityInsurance.png">
// <img      src:"../../../../../assets/sme-card/DirectedProtectedByLiabilityInsurance.jpg">
// <img      src:"../../../../../assets/sme-card/directors-and-officers-insurance.png">
// <img      src:"../../../../../assets/sme-card/doct_inde_insu_legal_costs.svg">
// <img      src:"../../../../../assets/sme-card/DoctorsNeedProfessionalIndemnityInsurance.svg">
// <img      src:"../../../../../assets/sme-card/Employee_Benefits_Trends_2023.svg">


