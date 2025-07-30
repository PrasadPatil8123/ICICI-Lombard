import { Component } from '@angular/core';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent {
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

}
