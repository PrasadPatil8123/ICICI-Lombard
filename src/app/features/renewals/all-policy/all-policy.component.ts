import { Component } from '@angular/core';
import { SharedDataService } from '../shared/services/shared-data.service';

@Component({
  selector: 'app-all-policy',
  templateUrl: './all-policy.component.html',
  styleUrls: ['./all-policy.component.css']
})
export class AllPolicyComponent {
// all policy - right
public title:string =`Renew now and 
stay protected!` 

public benefits = [
  {
    url:  "./assets/renewals/all_and_health/quick-renwl.svg",
    text: "Quick & easy renewal"
  },

  {
    url:  "./assets/renewals/all_and_health/ren_benefits.svg",
    text: "Avail renewal benefits"
  },

  {
    url: "./assets/renewals/all_and_health/assured-low-pre.svg",
    text: "Low premium Assured"
  }
]

public options:any = []

constructor(private sharedData:SharedDataService){
  this.options = this.sharedData.options
}

}
