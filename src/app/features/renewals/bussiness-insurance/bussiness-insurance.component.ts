import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { futureDateValidation } from '../shared/validators/future_date.validators';
import { HomeService } from '../shared/services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bussiness-insurance',
  templateUrl: './bussiness-insurance.component.html',
  styleUrls: ['./bussiness-insurance.component.css'],

})
export class BussinessInsuranceComponent {
  public title1: string = "Easy, simple"
  public title2: string = "Renewal of your insurance!"

  public policyForm: any
  public label1: string = "Enter Policy Number";
  public placeholder1: string = "AAAA/XXXXXXXX/YY/ZZZ"
  public label2: string = "Enter Policy End date"


  constructor(private fb: FormBuilder, private home: HomeService) {
    this.policyForm = this.fb.group({
      policyNo: ["", Validators.required],
      endDate: ["", [Validators.required, futureDateValidation]]
    })
  }

  onSubmit() {
    if (this.policyForm.invalid) {
      this.policyForm.markAllAsTouched();
    }

    if (this.policyForm.valid) {
      const newPolicy = this.policyForm.value;

      this.home.saveBussinessPolicy(newPolicy).subscribe(() => {
        console.log("Policy Stored: ", newPolicy);
        this.policyForm.reset();
      })

    }
  }


  // form controls
  get form() {
    return this.policyForm.controls
  }





}
