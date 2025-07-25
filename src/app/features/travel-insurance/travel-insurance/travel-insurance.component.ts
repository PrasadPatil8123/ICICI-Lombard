import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-travel-insurance',
  templateUrl: './travel-insurance.component.html',
  styleUrls: ['./travel-insurance.component.css']
})
export class TravelInsuranceComponent {
 
  //  3 bxes
    cards: { imgPath: string; title: string}[] = [
    {
      imgPath: 'assets/travel-insurance/1.png',  // You can use custom icons too
      title: 'Cashless medical/dental treatment'
      
    },
    {
      imgPath: 'assets/travel-insurance/2.png',
      title: 'Covers loss of passport & baggage'
      
    },
    {
      imgPath: 'assets/travel-insurance/3 (2).png',
      title: '24x7 instant support',
      
    }
  ];

  // feature
  features = [
    {
      icon: 'assets/travel-insurance/11.svg',
      title: 'No medical check-up',
      description: 'No more medical tests for buying travel insurance. With us, you can get your policy instantly and hassle-free.'
    },
    {
      icon: 'assets/travel-insurance/12.svg',
      title: 'Trip cancellation & interruption cover',
      description: 'With our travel insurance policy, you’re covered for cancellations and trip interruptions. This ensures unexpected changes, like a medical emergency, don’t hurt your finances.'
    },
    {
      icon: 'assets/travel-insurance/13.png',
      title: 'Pre-existing disease coverage',
      description: 'Don’t let the thought of a pre-existing condition hold you back! Our pre-existing disease cover add on* ensures you’re never caught off guard – just breathe easy and know that we’ve got your back!'
    },
    {
      icon: 'assets/travel-insurance/14.png',
      title: 'Adventure sports cover',
      description: 'In the mood for an adventure? Don’t miss to add our adventure sports cover add-on that covers medical expenses for injuries sustained during such activities.'
    },
    {
      icon: 'assets/travel-insurance/15.png',
      title: 'Cruise coverage',
      description: 'Planning a cruise vacation? Expect unique cover options for cruise travel, offering protection for related risks like missed shore, medical emergencies on cruise, cruise interruption, and unused excursions.'


    }
  ];

  advantages = [
    {
    title: 'Medical benefits',
    description:'Our travel insurance policy covers the expenses you incur on sudden illness, accident, emergency medical evacuation, and emergency dental treatment'
    },
    {
    title: 'Travel benefits',
    description:'Our travel benefits include coverage for trip cancellation, flight cancellation, hotel extension due to contingency, trip interruption and curtailment, and missed connecting flight.'
    },
    {
    title: 'Luggage benefits',
    description:'If you lose your luggage, electronic equipment, passport, or international driving licence, or your check-in luggage is delayed, our policy reimburses you for such losses.'
    },
    {
    title: 'Other benefits',
    description:'Our travel insurance policy also offers covers for financial emergency cash allowance, personal liability, car rental, burglary (home contents), and cruise-related concerns.'
    }
  ];

  covered = [
    {
      title:'Hospitalisation expenses for illness and injury',
      describe : 'A medical emergency during your trip could mental and financially drain you. Our travel insurance policy covers hospitalisation expenses during your travel.'
    },
    {
      title:'Lost, delayed, or damaged baggage',
      describe : 'Our travel insurance policy covers you for expenses incurred due to loss of baggage, delay (more than six hours) of baggage and even damage of baggage in transit.'
    },
    {
      title:'Personal liability',
      describe : 'Legal expenses arising from bodily injuries or property damage to a third-party could be taxing. Our policy helps cover the legal costs associated with such mishaps.'
    },
    {
      title:'Emergency cash',
      describe : 'If you need emergency cash during your trip because of a lost wallet, we will help you arrange it.'
    }
  ]

}
