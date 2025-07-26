import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sme-insurance',
  templateUrl: './sme-insurance.component.html',
  styleUrls: ['./sme-insurance.component.css'],
  // imports:[CommonModule]
})
export class SmeInsuranceComponent {

  leftBlogs = [
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_marine_overview_home.svg',
      title: 'Brief overview of Marine Insurance market in India',
      readMore: 'Read more'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_7tips_ghi.png',
      title: '7 Tips for Choosing Health Insurance for Your Small Business',
      readMore: 'Read more'
    }
  ];

  rightBlogs = [
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_wc_4_reasons_home.svg',
      title: "4 reasons why business firms require Employee's Compensation Policy",
      subtitle: "Read on to know more about why Employee's compensation policy is necessary for business enterprises",
      readMore: 'Read more'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_5reasons_wc_home.svg',
      title: "Read on to know more about why to choose ICICI Lombard for Employee's Compensation Policy",
      subtitle: "Learn which corporate plans are trending",
      readMore: 'Read more'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_wc3_home.svg',
      title: "All you need to know about Employee's Compensation Insurance",
      subtitle:"Read on to know more about Employee's compensation policy",                                
      readMore: 'Read more'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_how_wc_works_home.svg',
      title: "How Does Employee's Compensation Insurance Work?",
      subtitle: "Read on to know more about how does Employee's Compensation Insurance work?",
      readMore: 'Read more'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_marine_whyus_home.svg',
      title: "Why choose ICICI Lombard for Marine Transit Insurance",
      subtitle: "Read on to know more about why choose ICICI Lombard for Marine Transit Insurance",                                  
      readMore: 'Read more'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_marine_importance_home.png',
      title: "Why choose ICICI Lombard for Marine Transit Insurance",
      subtitle: "Read on to know more about why choose ICICI Lombard for Marine Transit Insurance",                                 
      readMore: 'Read more'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_marine_home.png',
      title: " How Does Marine Insurance Work?",
      subtitle:"Read on to know more about how does Marine Insurance Work?",
      readMore: 'Read more'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_ghi_adv_home.png',
      title: "Advantages of Group Health Insurance (GHI)",
      subtitle:"Read on to know more about advantages of Group Health Insurance (GHI)",                                    
      readMore: 'Read more'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/blog_ghi1_home.png',
      title: "Why is Group Health Insurance important for employers?",
      subtitle: "Read on to know more about why is Group Health Insurance important for employers?",
      readMore: 'Read more'
    }
  ];


  // Cards
  cards = [
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/whatsnew-drone.png',
      title: 'Drone Insurance',
      description: `Drone insurance can be bought by – Drone manufacturers, Aircraft and Drone operators,
      Logistics start up and Aggregators`,
      buttonText: 'Know More'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/whatsnew-mobile.png',
      title: 'Mobile Insurance',
      description: `Mobile insurance offers protection against a number of perils and damages to the phone
      and covers the expenses relating to its repair as well as replacement`,
      buttonText: 'Know More'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/whatsnew_business.png',
      title: 'Business Shield Insurance',
      description: `Business shield insurance includes Fire, Burglary, Loss of Profit, Legal Liability
      as a holistic package product`,
      buttonText: 'Know More'
    }
  ];


  //Awards and Accolades
  awards = [
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/trophy1.jpg',
      title: 'Emerging company of the year',
      description: 'We won the Economic Times Award for Corporate Excellence. The award recognises best companies and bright corporate honchos for business and entrepreneurial success.'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/mtf-awards.png',
      title: 'Business today - Money today financial awards',
      description: 'We were conferred with the ‘Best General Insurance Provider Of The Year’ and ‘Best Motor Insurer of the Year (Joint)’ awards at the Business Today - Money Today Financial Awards.'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/bfsi.png',
      title: 'Dun & bradstreet BSFI summit & awards 2020',
      description: 'We were adjudged ‘India’s Leading General Insurance Company - Private’ at the Dun & Bradstreet BFSI Summit & Awards 2020.'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/indiainsurancearard.png',
      title: 'India insurance summit & awards 2020',
      description: 'We were conferred with the ‘Insurance Company of the Year’ award. Hosted by the Synnex Group, the award recognises corporate houses for their exemplary work in the insurance industry every year.'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/bestinsurers.png',
      title: '2020 BEST INSURERS RECOGNITION',
      description: 'We were recognised as one of the ’20 Best Insurers in the Asia Pacific Region’ for 2020. The accolade is an outcome of IDC Financial Insights’ research on identifying insurers who have successfully pursued digital transformation for long-term sustainability.'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/ficci-awards.png',
      title: 'TRIPLE ACCOLADES AT FICCI AWARDS',
      description: 'Our ‘Al-enabled vehicle inception facility’ won us the FICCI Awards in the ‘Most Innovative Insurance Offerings’ category. Further, we won the ‘Claims Excellence’ award for our ‘digital motor claims process.’ We also received the ‘Best CSR initiative’ award in the non-life category for our ‘Caring Hands’ programme.'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/iprcca-awards.png',
      title: '10TH EDITION OF IPRCCA',
      description: 'We won a ‘Bronze’ in the ‘Continuous Campaign’ category for our campaign ‘Ride to Safety’, a unique CSR initiative to make Indian roads safer for motorcycle riders. The award is hosted by Exchange4media Group and recognises the contribution and success of the public relations and communication industry.'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/wcdc-awards.png',
      title: 'WORLD CSR DAY CONGRESS Et AWARDS -9TH EDITION',
      description: 'We were presented with the ‘Best CSR Practices’ award at the 9th edition of the World CSR Day Congress 8 Awards, organised by ET Now. The recognition came for our unique CSR campaign ‘Ride to Safety’.'
    },
    {
      image: 'https://www.icicilombard.com/business-insurance/assetsSME/images/atd-awards.png',
      title: 'ATD BEST 2019 GLOBAL AWARDS',
      description: 'We were conferred with ATD (Association of Talent Development) ‘Best 2019 Global Awards’ for the 7th time. The ATD Best Global Awards recognise organisations that leverage talent development strategically to achieve business results. More than 140 companies from 10 countries participated this year, with 57 organisations winning this award.'
    }
  ];

  chunkedAwards: any[] = [];

  ngOnInit() {
    this.chunkArray(3); // Group cards into slides of 3
  }

  chunkArray(chunkSize: number) {
    for (let i = 0; i < this.awards.length; i += chunkSize) {
      this.chunkedAwards.push(this.awards.slice(i, i + chunkSize));
    }
  }
}
