import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-policy-card',
  templateUrl: './policy-card.component.html',
  styleUrls: ['./policy-card.component.css']
})
export class PolicyCardComponent {
  @Input() policy?:any

}
