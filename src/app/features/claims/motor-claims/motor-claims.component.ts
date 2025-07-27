import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-motor-claims',
  templateUrl: './motor-claims.component.html',
  styleUrls: ['./motor-claims.component.css']
})
export class MotorClaimsComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  display = false;

  public raiseTypeCar: any = ""
  public allCarDetails: any = [];
  public countId: number = 1;
  public detailsOfCar = {
    id: 1,
    policyNo: '',
    vehicleReg: '',
    raiseTypeCar: ''
  }

  public onGetDataFormUser() {
    this.detailsOfCar.id = this.countId++;
    this.allCarDetails.push({ ...this.detailsOfCar })
    console.log(this.allCarDetails);
  }

  registration: any;
  public registrationNumber: any = []
  public countID: number = 1;
  constructor() { }
  public registCarNo = {
    id: 1,
    policyNo: '',
    policyNumber: '',
    vehicleReg: '',
    vehicleRegNo: ''
  }

  public onSubmitData() {
    this.registCarNo.id = this.countID++;
    this.registrationNumber.push({ ...this.registCarNo })
    console.log(this.registrationNumber)
  }

  serviceDoorstep = [
    { name: 'Doorstep car pick-up & drop' },
    { name: 'Dedicated Claim Manager' },
    { name: 'Service assurance (2 years, up to 10,000 kms from the date of repairs)' },
    { name: 'Regular WhatsApp updates and tracking' }
  ]



  claimMethods = [
    {
      icon: '../../../../assets/claimsModuleImages/claim_ladge_claim.png',
      title: 'Lodge a claim',
      description: 'Lodge a claim <a href="#">here</a>'
    },
    {
      icon: '../../../../assets/claimsModuleImages/claim_tollfree.png',
      title: 'Call 1800 2666',
      description: '(toll-free)'
    },
    {
      icon: '../../../../assets/claimsModuleImages/claim_download_app.png',
      title: 'Download IL Take Care app',
      description: '<img src="../../../../assets/claimsModuleImages/app1-img.png"> <img src="../../../../assets/claimsModuleImages/app2-img.png">'
    },
    {
      icon: '../../../../assets/claimsModuleImages/claim_sms.png',
      title: 'SMS "CLAIM"',
      description: 'Send to 575758'
    },
    {
      icon: '../../../../assets/claimsModuleImages/claim_write.png',
      title: 'Write to us',
      description: 'customersupport@icicilombard.com'
    }
  ];

  claimSteps2 = [
    {
      image: '../../../../assets/claimsModuleImages/times_4.png',
      description: "We'll follow-up with the workshop regarding the status of your Vehicle's repairs!",
    },
    {
      image: '../../../../assets/claimsModuleImages/times_5.png',
      description: 'Sit back, relax! We will settle the bill as per the policy terms and conditions.',
    },
    {
      image: '../../../../assets/claimsModuleImages/times_6.png',
      description: 'We also provide quality assurance* on repairs done at a preferred partner garage.',
    },
  ];
  claimSteps = [
    {
      image: '../../../../assets/claimsModuleImages/times_1.png',
      description: "We'll facilitate the pick-up and drop of your car by a preferred workshop^^.",
    },
    {
      image: '../../../../assets/claimsModuleImages/times_2.png',
      description: 'Get instant claim approval using the <strong>InstaSpect#</strong> feature on the IL Take Care app.',
    },
    {
      image: '../../../../assets/claimsModuleImages/times_3.png',
      description: 'You can also track and review your ICICI Lombard motor claim status on the app itself.',
    },
  ];

  faqs = [
    {
      question: 'How do I claim insurance for my car or bike?',
      answer: 'Contact our toll-free helpline 1800 2666 to register your claim and get a claim number or reference number. You can also directly register your claim here or download the IL Take Care app to initiate a claim.',
    },
    {
      question: 'What is the difference between a cashless claim and a non-cashless or reimbursement claim?',
      answer: 'Cashless claim: In a cashless claim, we pay our share of your vehicle’s repair charges directly to the garage (provided the vehicle is repaired in our garage network).Non-cashless or reimbursement claim: If the vehicle is repaired in a garage outside the purview of our network, then you will need to pay the repair charges yourself. You need to get an inspection done from our claims manager/surveyor, post which you can get the repairs done. You can get your admissible claim amount reimbursed by submitting the original bills and payment receipts to our office.',
    },
    {
      question: 'Can I ask for some advance in case the repair charges are very high?',
      answer: 'We offer cashless claim services where the repair charges are directly paid to the garage if your vehicle is repaired in a garage falling within our network. However, if the vehicle is repaired in a garage not in our network, you have to pay the repairing charges to the garage, and we will reimburse the amount to you, as per our non-cashless claim services.',
    },
    {
      question: 'When should I report an incident to the police?',
      answer: 'You need to report the following incidents to the nearest police station: You’ve hurt someone with your vehicle, Your car/two-wheeler is stolen, Your vehicle is damaged due to a malicious activity,You’ve lost your car/bike keys, Your vehicle has been in a major accident',
    },
    {
      question: 'How does filing a claim affect my policy?',
      answer: 'When you make no claims, you get a No Claim Bonus (NCB) on your next year’s Own damage premium. The NCB amount starts from 20% of the Own Damage premium, if you make no claims. It accumulates up to a maximum of 50%. So if you make a small claim, say for a minor dent on your bumper, you lose out on the NCB. Another reason for not making a small claim is the deductible amount that you have to pay out of pocket. Suppose your policy comes with a deductible of 1000 and you make a claim of 3000, the insurer pays only 2000. Moreover, if your accumulated NCB was 5000, you end up losing that too. On the other hand, in case of a larger claim, you cover expensive repair costs and avoid out-of-pocket expenses through your insurance plan.',
    },
    {
      question: 'How long should I wait to make a bike or car insurance claim?',
      answer: 'It’s best to report the claim immediately, as soon as the accident or theft occurs. Contact us within 24 hours of the incident so that we can begin your bike or car insurance claim process.',
    },
    {
      question: 'What should I do in case of an own damage claim?',
      answer: 'Contact us on 1800 2666 or SMS CLAIM to 575758 to start the two-wheeler or car insurance claim process. Our call centre representative will direct you to the nearest cashless garage and also help you with the next steps for the motor insurance claim. You can also login to our IL Take Care app and visit the claims section to file an own damage claim.',
    },
    {
      question: 'How can I check my ICICI Lombard motor claim status?',
      answer: 'You can login to our IL Take Care app with your policy number to check your ICICI Lombard motor claim status. You can also check your claims status on our website. Click here to know your claims status..',
    },
  ];


}
