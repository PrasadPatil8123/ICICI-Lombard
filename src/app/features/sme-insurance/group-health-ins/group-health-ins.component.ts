import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-health-ins',
  templateUrl: './group-health-ins.component.html',
  styleUrls: ['./group-health-ins.component.css'],
})
export class GroupHealthInsComponent {
ghForm: FormGroup;
public array: any=[];
activeTab: string = 'employers';
activeTab2:string="tab1"
isFormDirty:boolean=true;
  constructor(private fb: FormBuilder, private http: HttpClient,private router :Router) {
    this.ghForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      agree: [true, Validators.requiredTrue],
      whatsapp: [false],

    });
     
  }
  canDeactivate() {
    return this.isFormDirty
      ? confirm('you want to leave this page ?')
      : true;

  }

  card(){
    this.router.navigateByUrl('sme/main')
  }


  onSubmit() {
    if (this.ghForm.valid) {
      const formData = this.ghForm.value;
      this.http.post('http://localhost:3000/group-health', formData).subscribe({
        next: (res) => {
          console.log('Response:', res);
          alert('Submitted successfully!');
          this.ghForm.reset(); // clear form after submit
        
        },
        error: (err) => {
          console.error('Submission error:', err);
          alert('Something went wrong while submitting the form.');
        }
      });
    } else {
      alert('Please fill all fields correctly.');
    }
  }

  queries() {
  const formData = this.ghForm.value;

  this.router.navigate(["sme/claim-vdo"] , { queryParams: formData }  );
}

  emp_d() {
  const formData = this.ghForm.value;
  this.router.navigate(["sme/emp-d"], { queryParams: formData });
}



  features = [
  {
    icon: '../../../../assets/sme-group-health/network-hospitals.svg',
    title: '10,200+ network hospitals',
    description:
      'We have 10,200+ network hospitals across India where your employees can get cashless treatment. We have tied up with leading health institutions across India. Whether your employees reside in urban or rural areas, they can access quality healthcare.'
  },
  {
    icon: "../../../../assets/sme-group-health/tele-consult.svg",
    title: 'Tele consultations',
    description:
      'This is another significant benefit of our group health insurance policy. We offer unlimited general physical consultations for routine health issues by a qualified doctor. Your employees can avail of this service easily.'
  },
  {
    icon: "../../../../assets/sme-group-health/health-services.svg",
    title: 'Health assistance services',
    description:
      'Our policy goes beyond medical expenses by offering health assistance services across India. This service supports you in all your health-related needs. Whether searching for a doctor or hospital, we’ve got you covered.'
  },
  {
    icon:"../../../../assets/sme-group-health/house-claims.svg",
    title: 'In-house claims processing',
    description:
      'One of the standout features of our group medical insurance policy is the provision for cashless settlement. By seeking treatment at our network of hospitals, your employees can avail the necessary support without any hassle.'
  },
  {
    icon: "../../../../assets/sme-group-health/wellness-program.svg",
    title: 'Wellness programmes',
    description:
      'Our group medical insurance policy allows your workforce to choose a range of wellness plans to suit their needs. These plans promote proactive health management and focus on preventive care as well.'
  }
];

features2 = [
  {
    num: '1',
    title: 'Pre and post-hospitalisation',
    description:
      "Our group health insurance policy covers pre and post-hospitalisation expenses. This means not only the costs of your hospital stay are covered, but also the expenses you bear before and after your hospital visit."
  },
  {
    num: '2',
    title: 'Pre-existing diseases',
    description:
      'Group health insurance coverage for pre-existing diseases ensures your employees with prior health issues arent left unprotected. It offers peace of mind and fosters a sense of security within the workforce. They feel reassured knowing their health needs are addressed despite pre-existing ailments.'
  },
  {
    num: '3',
    title: 'Maternity expenses',
    description:
      'Our group health insurance policy offers coverage for maternity expenses to your employees. This is a significant benefit for those planning to start or expand their families. It covers pre and post-natal expenses and offers coverage to the baby from day one. This not only offers access to quality healthcare services but also eases financial strain..'
  },
  {
     num: '4',
    title: 'In-patient department expenses',
    description:
      'Our group health insurance plan provides comprehensive coverage for in-patient department expenses, including room charges, doctors fees, medical tests, surgical procedures, medications administered, etc., during hospital stays. It safeguards your employees against high costs associated with hospitalisation, requiring a minimum of 24 hours stay..'
  },
  {
     num: '5',
    title: 'Ambulance charges',
    description:
      'Our policy covers ambulance charges that can be significantly high. These charges depend on various factors, including distance travelled, type of ambulance, and level of medical care provided. Coverage for ambulance charges ensures well-rounded financial protection..'
  },
   {
    num: '6',
    title: 'Day care expenses',
    description:
      'Day care expenses are those for which your employees need to stay in hospitals. They are done within a few hours or less than a day. Costs associated with such treatments can be pretty high, and coverage for them ensures peace of mind and holistic healthcare.'
  }
];

// ====================
compensations = [
  {
    scenario1: ['Meaning'],
    scenario2: 'Covers a group of people',
    scenario3: 'Meaning	Covers a group of people ',
    
  },
  {
    scenario1: ['Who is insured?'],
    scenario2: 'Employees and their family ',
    scenario3: 'Only the individual',
  },
  {scenario1: ['Purchaser and premium payment'],
    scenario2: '	Employers',
    scenario3: 'Individual ',
  },
  {
    scenario1: ['Coverage duration'],
    scenario2: 'As long as you are employed with the company',
    scenario3: '	Needs to be renewed yearly',
    
  },
  {
    scenario1: ['Control over plan'],
    scenario2: 'Limited control ',
    scenario3: '	Full control ',
  },
  {scenario1: ['Coverage for pre-existing diseases'],
    scenario2: 'From day one ',
    scenario3: 'Usually after a few months or years ',
  },
  {scenario1: ['Coverage duration'],
    scenario2: 'Not available ',
    scenario3: 'Available',
  },
 
];
navigateTo(path: string) {
    this.router.navigate([path]);
  }

articles = [
    {
      img: "assets/sme-group-health/workers-compensation-insurance-for-small-businesses.jpg",
         route: 'sme/card1',
      title: 'Workplace safety guide: Preventing slip, trip and fall incidents',
      discription:
        'Workplace safety is important for employers and employees in India. Slips, trips and falls are some of the common accidents seen in offices, factories, shops and other workplaces. These may seem like trivial incidents, but they can cause serious injuries, lost working days, productivity drops and insurance claims.',
      date: "09-09-2025"
    },{
       route: 'sme/card1',
      img:"../../../../assets/sme-group-health/reduce-business-risks-labour-insurance.jpg",
      title:'Types of full body safety harnesses',
      discription:'When working at heights or in risky environments, safety is a priority. One of the most essential pieces of equipment you will come across is the safety harness full body type. These harnesses are designed to protect workers by distributing the force of a fall over the strongest parts of the body, such as the thighs, chest and shoulders. But not all harnesses are the same. In this guide, s',
      date:"09-9-2025",

    },{
       route: 'sme/card1',
      img:"../../../../assets/sme-group-health/StratToWC.png",
      title:'What is occupational contact dermatitis?',
      discription:'Occupational contact dermatitis is a type of eczema caused by workplace exposure to irritants or allergens. It affects various professions, including healthcare workers, cleaners, and construction workers. Symptoms include itchy, dry, or cracked skin, redness, and blisters. Treatment involves avoiding triggers, using topical corticosteroids, and moisturizers. ',
      date:"09-9-2025",

    }
  ]

  // ============
testimonials = [
    {
      name: 'Prachi Dua',
      company: 'NucleusTeq Consulting Pvt Ltd',
      message: `We recently took the group health insurance policy from the SME website of the ICICI Lombard...`
    },
    {
      name: 'Pratikshya Behera',
      company: 'Jeeva Organic Pvt Ltd',
      message: `It's very difficult to find an insurance company when you make a claim. ICICI Lombard is one of the best...`
    },
    {
      name: 'Ravi Kumar',
      company: 'TechCorp Solutions',
      message: `Their response was quick, and the onboarding process was smooth.`
    },
    {
      name: 'Aarti Singh',
      company: 'Medline India',
      message: `Excellent claim handling process. Seamless from start to finish.`
    },
    {
      name: 'Pratikshya Behera',
      company: 'Jeeva Organic Pvt Ltd',
      message: `It's very difficult to find an insurance company when you make a claim. ICICI Lombard is one of the best...`
    },
    {
      name: 'Ravi Kumar',
      company: 'TechCorp Solutions',
      message: `Their response was quick, and the onboarding process was smooth.`
    },
    {
      name: 'Aarti Singh',
      company: 'Medline India',
      message: `Excellent claim handling process. Seamless from start to finish.`
    }
  ];

  currentIndex = 0;

  next() {
    if (this.currentIndex + 1<= this.testimonials.length) {
      this.currentIndex += 1;
    }
  }

  prev() {
    if (this.currentIndex >= 0) {
      this.currentIndex -= 1;
    }
  }

  setSlide(index: number) {
    this.currentIndex = index;
  }

}
