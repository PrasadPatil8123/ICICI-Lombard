import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit  {

     cards: { imgPath: string; title: string}[] = [
    {
      imgPath: 'assets/travel-insurance/single-ins/2.svg',  // You can use custom icons too
      title: 'Pre-existing conditions'
    },
    {
      imgPath: 'assets/travel-insurance/single-ins/3.svg',
      title: 'Adventure sports' 
    },
    {
      imgPath: 'assets/travel-insurance/single-ins/4.svg',
      title: 'Car Rental and Cruise coverage',
    }
  ];

  // feature
  features:{  icon: string;title: string;description: string;}[] = [
    {
      icon: 'assets/travel-insurance/single-ins/2.svg',
      title: 'Pre-existing conditions',
      description: 'No more medical tests for buying travel insurance. With us, you can get your policy instantly and hassle-free.'
    },
    {
      icon: 'assets/travel-insurance/single-ins/8.svg',
      title: 'Adventure sports',
      description: 'With our travel insurance policy, you’re covered for cancellations and trip interruptions. This ensures unexpected changes, like a medical emergency, don’t hurt your finances.'
    },
    {
      icon: 'assets/travel-insurance/single-ins/3.svg',
      title: 'Customisable coverage',
      description: 'Don’t let the thought of a pre-existing condition hold you back! Our pre-existing disease cover add on* ensures you’re never caught off guard – just breathe easy and know that we’ve got your back!'
    },
    {
      icon: 'assets/travel-insurance/single-ins/9.svg',
      title: 'Car rental and cruise coverage',
      description: 'In the mood for an adventure? Don’t miss to add our adventure sports cover add-on that covers medical expenses for injuries sustained during such activities.'
    },
    {
      icon: 'assets/travel-insurance/single-ins/4.svg',
      title: 'Extensive protection',
      description: 'Planning a cruise vacation? Expect unique cover options for cruise travel, offering protection for related risks like missed shore, medical emergencies on cruise, cruise interruption, and unused excursions.'
    },
    {
      icon: 'assets/travel-insurance/single-ins/10.svg',
      title: 'For the modern traveller',
      description: 'Planning a cruise vacation? Expect unique cover options for cruise travel, offering protection for related risks like missed shore, medical emergencies on cruise, cruise interruption, and unused excursions.'
    }
  ];

  benefits = [
    {
    title: 'A Wide Range of Covers',
    description:'This single-trip insurance policy provides a wide range of 50 different coverage options, allowing you to tailor your plan based on your specific needs. Whether youre traveling for business or leisure, you can choose from various covers.'
    },
    {
    title: 'Offers Adventure Sports Insurance Coverage',
    description:'Whether youre hitting the slopes or exploring the depths of the ocean, TripSecure+ offers comprehensive coverage for adventure sports.Whether its skiing down a mountain or scuba diving in exotic waters, this single trip holiday insurance plan ensures youre covered for any unexpected events. You can enjoy your favourite activities without worrying about the risks, knowing that this one trip travel insurance plan protects you 24x7.'
    },
    {
    title: 'Emergency Assistance',
    description:'The single trip travel insurance policy offers comprehensive coverage to handle financial emergencies while youre traveling. It ensures that you can receive emergency cash if unexpected situations arise. This helps you manage sudden expenses without stress.'
    },
    {
    title: 'Daily Hospital Allowances',
    description:'This one trip travel insurance policy provides daily hospital allowances, covering your medical needs in case of illness or injury during the trip, so you can focus on recovery rather than finances.'
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
  ];

  type = [
    {
      title: 'Single trip travel insurance',
      describe :'As the name implies, this policy covers a single international trip. Such a policy is valid until the conclusion of your trip, or say, until you return to your home country.'
    },
    {
      Title:'Multi-trip travel insurance',
      describe: 'If you travel frequently, you probably dont want to waste time and effort buying insurance for each trip. Considering this, we have come up with a multi-trip policy. The policy is valid for 365 days and you can take as many trips as you want during this period. It is a comprehensive policy that covers on-trip medical expenses, lost baggage, missed connecting flights, compassionate visit, etc.'
    }
  ]
  // document
  policyDocs = [
    { title: 'Policy wordings', link: 'assets/travel-insurance/single-ins/doc/international-travel-insurance-policy-wording.pdf' },
    { title: 'Brochure', link: 'assets/travel-insurance/single-ins/doc/tripsecure-brochure_v12.pdf' },
    
  ];

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  ngOnInit(): void {}

  
// question
  questions = [
    {
      title: 'How many times can we extend the policy?',
      answer:  'You can extend your travel insurance policy as many times as you want. However, you can extend your policy only if the total policy is less than or equal to 360 days.',
      expanded: false
    },
    {
      title: 'How can I cancel my travel insurance policy?',
      answer: 'To initiate the cancellation process, you need to submit the travel insurance policy document, copy of passport, and some more documents.',
      expanded: false
    },
    {
      title: 'Do I get a grace period for my travel insurance policy?',
      answer: 'Yes, you can get a grace period on your travel insurance policy. To do so, contact our representatives or write us at customersupport@icicilombard.com.',
      expanded: false
    },
    {
      title: 'Can I buy travel insurance after leaving the country?',
      answer: 'No, you cannot purchase travel insurance once you have started your trip. The policys purchase date, as well as the policys commencement date, must be before the start of your journey.',
      expanded: false
    },
    {
      title: 'What is the validity period of travel insurance?',
      answer: 'You will no longer be covered for different travel and medical-related contingencies, including trip cancellation, loss/delay of checked-in baggage and medical emergencies, once your travel insurance expires. You should always ensure that your travel insurance covers the entire duration of your trip abroad.',
      expanded: false
    },
    {
      title: 'What is accidental death coverage in travel insurance??',
      answer: 'Accidental death coverage offers a lump sum amount in the unfortunate event of your (insureds) death or disablement while mounting, dismounting or travelling in a common carrier/public carrier.',
      expanded: false
    },
    {
      title: 'Do I need to buy travel insurance for short trips as well?',
      answer: 'Yes. It is always good to be insured against the unpredictable - like lost passport/baggage or medical emergency. Travel insurance will help you tackle such situations with ease.',
      expanded: false
    },
    {
      title: 'Is travel insurance mandatory for everyone?',
      answer: 'Travel insurance is mandatory when you want to visit certain countries (like Schengen countries). However, it is highly recommended to have travel insurance to secure yourself against travel-related risks.',
      expanded: false
    },
    {
      title: 'Will my travel insurance cover any pre-existing disease?',
      answer: 'Our TripSecure+ travel insurance provides coverage for pre-existing conditions via the Pre-existing disease add-on cover.',
      expanded: false
    },
  ];

  toggleSection(index: number): void {
    this.questions[index].expanded = !this.questions[index].expanded;
  }
}
