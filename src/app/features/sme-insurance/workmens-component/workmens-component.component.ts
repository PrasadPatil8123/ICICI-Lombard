import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from 'src/app/core/services/form-service.service';

@Component({
  selector: 'app-workmens-component',
  templateUrl: './workmens-component.component.html',
  styleUrls: ['./workmens-component.component.css']
  
})
export class WorkmensComponentComponent {
     public myform:any=[]
     public showfrm : boolean=true
     
     f1(){
      this.showfrm=true
     }
      f2(){
      this.showfrm=false
     }
    
 public bule_img1:any='../../../../assets/sme-img/wc_banner_new.png'
 public marking:any='../../../../assets/sme-img/tick_marine.png'
 public wc1:any='../../../../assets/sme-img/wc_who_needs.png'
 public wc2:any='../../../../assets/sme-img/wc_whatis_included.png'
 public tick:any='../../../../assets/sme-img/tick_marine.png'
 constructor( private fb : FormBuilder,private http:HttpClient){
   this.myform=this.fb.group({
    mobail:[""],
    email:[""],
    company:[""],
    pincode:[""],
   });
    
  }
  insuranceForm!: FormGroup;

 industryCategories = ['Construction', 'Manufacturing', 'Textile', 'IT', 'Logistics'];

  policyMonths = [1,2,3,4,5,6,7,8,9,10,11,12];


  ngOnInit() {
  this.insuranceForm = this.fb.group({
    industryCategory: [''],
    skilledWorkersCount: [0],
    skilledWorkerSalary: ["salary"],
    semiSkilledWorkersCount: [0],
    semiSkilledWorkerSalary: ["salary"],
    unskilledWorkersCount: [0],
    unskilledWorkerSalary: ['salary'],
    policyPeriod: [1],
    lastClaim: ['Nil or below ₹1 lakh']
  });
}


  onSubmit() {
    if (this.insuranceForm.valid) {
      this.http.post('http://localhost:3000/policies', this.insuranceForm.value).subscribe(res => {
        console.log('Data stored:', res);
        alert('Data submitted successfully!');
      });
    }
  }


//  form1
 onSubmit1(){
  
 }
//  ==========================================
compensations = [
  {
    scenario: 'Death resulting from an injury',
    details: [
      'Amount equal to 50% of the monthly wages of the deceased employee multiplied by the relevant factor.',
      'OR',
      'An amount of Rs 1.2 lakhs, whichever is more'
    ]
  },
  {
    scenario: 'Permanent total disablement from injury',
    details: [
      'An amount equal to 60% of the monthly wages of the injured employee multiplied by the relevant factor.',
      'OR',
      'An amount of Rs 1.4 lakhs, whichever is more'
    ]
  },
  {
    scenario: 'Permanent partial disablement result from the injury',
    details: [
      'In the case of an injury specified in Part II of Schedule I, Percentage of the loss of earning capacity caused by that injury (I)',
      'in the case of an injury not specified in Schedule I, Proportionate to the loss of earning capacity as assessed by the qualified medical practitioner permanently caused by the injury (I)'
    ]
  },
  {
    scenario: 'Temporary disablement whether total or partial results from the injury',
    details: [
      'A half monthly payment of the sum equivalent to 25% of monthly wages of the employee to be paid in accordance with the provisions of sub-section (2) section 4 of Employee’s Compensation Act, 1923.'
    ]
  }
];
advantagesList = [
    {
      icon: '../../../../assets/sme-img/Comprehensive and Flexible Coverage.png',
      title: 'Comprehensive and Flexible Coverage',
      description: `Our Employee’s Compensation Policy (previously known as Workmen Compensation Policy and WC policy)
      offers extensive coverage, encompassing medical expenses for workplace injuries or illnesses.
      Beyond benefiting employees, it also shields employers from legal liabilities.`
    },
    {
      icon: '../../../../assets/sme-img/Hassle_free_Claims_Settlement_Process.png',
      title: 'Hassle-free Claims Settlement Process',
      description: `Our dedicated team promptly handles and reviews claims, working collaboratively with you for
      swift processing, minimal disruption, and transparent communication.`
    },
    {
      icon: '../../../../assets/sme-img/Coverage_Suited_for_Unique_Business_Needs.png',
      title: 'Coverage Suited for Unique Business Needs',
      description: `At ICICI Lombard, we understand that every business is unique and faces different risks.
      Therefore, we have designed our Employee’s Compensation Policy to suit the unique needs of every business.`
    },
    {
      icon: '../../../../assets/sme-img/Convenient_Buying_Journey.png',
      title: 'Convenient Buying Journey',
      description: `Buy our Employee’s Compensation Policy in just a few clicks, making the process seamless and efficient,
      allowing you to protect your business and employees smartly from anywhere, be it home or office.`
    }
  ];

  // ====================
   heading = 'Who Can Buy an Employee’s Compensation Policy Online?';
  points = [
    'Any employer, whether as a principal or contractor, engaging “employees” as defined in the Employee’s Compensation Act, 1923.',
    'Any employer of such employees who do not qualify as an employee as per the said act but, virtue of the nature of engagement with an employer, share a like employee-employer relationship.'
  ];


    title = `Why You Should Buy ICICI Lombard’s Employee’s Compensation Insurance Policy?`;
  subtitle = `Our policy (popularly known as WC policy and WC insurance) provides you and your workers comprehensive coverage and helps you fulfil your legal obligations.`;

  benefits = [
    'The buying process is quick and convenient',
    'We provide customizable options',
    'The claims are settled on time – effortlessly.'
  ];

  // =========================
  title2 = `How to Buy Employee’s Compensation Insurance Policy from ICICI Lombard?`;

  steps = [
    'Fill in the details on the right-hand side of the webpage that appears, <a href="#">here</a>',
    'Provide other details like your mobile number, email ID, your company’s name and pincode',
    'Check on the Terms & Conditions and Receive updates on WhatsApp boxes',
    'Next, click on ‘Proceed to Buy’',
    'Follow the instructions on the page that opens once you click proceed to purchase your policy.'
  ];

  bottomInfo = [
    `You can also take the help of our responsive and intelligent assistant, RIA, to buy the policy. You can also fill out our ‘Request a callback’ form, whereby our executives will call you at your chosen time slot to help you with policy queries and buying.`,
    `You can also write to us at <strong class="highlight-email">businessinsurance@icicilombard.com</strong> to learn more about the policy and buying process.`
  ];

  



}
