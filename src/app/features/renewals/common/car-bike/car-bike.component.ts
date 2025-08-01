import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-car-bike',
  templateUrl: './car-bike.component.html',
  styleUrls: ['./car-bike.component.css']
})
export class CarBikeComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() policy!: any;
  @Input() tableHead!: any;
  @Input() tableData!: any;
  @Input() para1!: any;
  @Input() para2!: any;

  public selectedPolicy: any = null
  public policyNumber:string = ""

  constructor(private router: Router, private homeService: HomeService) { }

  // function
  goToDisclaimer() {
    this.router.navigate(['disclaimers'])
  }

  onProceed() {

  const enteredPolicyNumber = this.policyNumber.trim();

  if(!enteredPolicyNumber){
      alert("Please Enter Policy Number")
      return 
    }

  this.homeService.getPolicyByPolicyNumber(this.policyNumber).subscribe((resp: any) => {
    console.log("Entered:", enteredPolicyNumber);
    // console.log("Response:", resp);

    if (Array.isArray(resp) && resp.length > 0) {
      // Manually search karaycha
      const matchedPolicy = resp.find(item => 
        item.policyNumber?.trim() === enteredPolicyNumber
      );

      if (matchedPolicy) {
        this.selectedPolicy = matchedPolicy;
        console.log("✅ Policy matched:", matchedPolicy);
      } else {
        this.selectedPolicy = null;
        console.log("❌ No matching policy found");
      }
    } else {
      this.selectedPolicy = null;
      console.log("❌ Empty response");
    }

    this.policyNumber = ""
  });
}
}


