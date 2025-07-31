import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-compensation',
  templateUrl: './emp-compensation.component.html',
  styleUrls: ['./emp-compensation.component.css']
})
export class EmpCompensationComponent {
images = [
    {
      src: '../../../../../assets/sme-group-health/workers-compensation-insurance-for-small-businesses.jpg',
      title: 'Why Insuring Your Household Items During Transit is Essential',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: '../../../../../assets/sme-card/choosingRightLabour.png',
      title: 'Customising Marine Insurance Policies to Fit Your Needs',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/CommonMisconceptionsAboutProfessionalLiabiltyInsurance.jpg" ,
      title: 'Customising Marine Insurance Policies to Fit Your Needs',
      link: 'https://www.icicilombard.com/...'
    },




    {
       src:"../../../../../assets/sme-card/Complete_Guide_to_Effective_Risk_Management_Strategies.svg",
      title: 'Why Insuring Your Household Items During Transit is Essential',
      link: 'https://www.icicilombard.com/...'
    },
    {
    src:"../../../../../assets/sme-card/ComponentsOfWCInsurance.svg",
      title: 'Customising Marine Insurance Policies to Fit Your Needs',
      link: 'https://www.icicilombard.com/...'
    },
    {
    src:"../../../../../assets/sme-card/comprehensive-general-liability-insurance.png",
      link: 'https://www.icicilombard.com/...'
    },




    {
       src:"../../../../../assets/sme-card/ComprehensiveGuidetoCorporateInsurance.svg",
      title: ' What are the Objectives of Marine Insurance?   ',
      link: 'https://www.icicilombard.com/...'
    }, {
    src:"../../../../../assets/sme-card/ComprehensiveGuidetoMarineInsurance.svg",
      title: '  Intermediate Storage in Marine Insurance: What You Need to Know  ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src:"../../../../../assets/sme-card/contractors-all-risk-policy.png",
      title: '  How Does Hull Insurance Safeguard Ship Owners from Vessel Damage? ',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src:"../../../../../assets/sme-card/CompRiskFireInsu.svg",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
    src:"../../../../../assets/sme-card/contractors-all-risk-policy-coverage.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
     {
      src: "../../../../../assets/sme-card/blog_wc_benefits.svg",
      title: ' Marine Insurance Under COGSA: Protecting Your Cargo At Sea   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/blog_wc_types.svg",
      title: ' What are the Objectives of Marine Insurance?   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/blog_wc_settlements.svg",
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
      src: "../../../../../assets/sme-card/blog7-marine.png",
      title: ' Marine Insurance Under COGSA: Protecting Your Cargo At Sea   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/blog8-Cyber.png",
      title: ' What are the Objectives of Marine Insurance?   ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/BenefitsForInvestingCommercialProperty.png",
      title: '  Intermediate Storage in Marine Insurance: What You Need to Know  ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/blog_ghi_adv.png",
      title: '  How Does Hull Insurance Safeguard Ship Owners from Vessel Damage? ',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/blog2-CGL.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/Blog_How_Event_Insurance_Can_Save_Your_Budget_from_Unexpected_Costs.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
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
      src: "../../../../../assets/sme-card/blog3-marine-pandi.png",
      title: '  Intermediate Storage in Marine Insurance: What You Need to Know  ',
      link: 'https://www.icicilombard.com/...'
    }, {
      src: "../../../../../assets/sme-card/Blog4_new.png",
      title: '  How Does Hull Insurance Safeguard Ship Owners from Vessel Damage? ',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/blog4-ear.png",
      title: ' Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/blog9-CAR-benefits.png",
      title: '  Common Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
    {
      src: "../../../../../assets/sme-card/blog10-CAR.png",
      title: '  Mistakes to Avoid When Understanding Marine Insurance Principles',
      link: 'https://www.icicilombard.com/...'
    },
     

  ];
    
}




