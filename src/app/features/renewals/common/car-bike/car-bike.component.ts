import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-bike',
  templateUrl: './car-bike.component.html',
  styleUrls: ['./car-bike.component.css']
})
export class CarBikeComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() policyNo!: string;
  @Input() tableHead! :any;
  @Input() tableData! :any;
  @Input() para1! :any;
  @Input() para2! :any;
 

  constructor(private router:Router){}

  // function
  goToDisclaimer(){
    this.router.navigate(['disclaimers'])
  }


}
