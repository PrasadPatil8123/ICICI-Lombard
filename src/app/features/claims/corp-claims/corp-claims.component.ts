import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-corp-claims',
  templateUrl: './corp-claims.component.html',
  styleUrls: ['./corp-claims.component.css']
})
export class CorpClaimsComponent {
  intimateForm: FormGroup;
  trackForm: FormGroup;
  public mail: any = "customersupport@icicilombard.com";
  public customerMail: any = `customersupport@icicilombard.com.`

  public email: any = 'customersupport@icicilombard.com';
  public listOfData: any = [];
  public countId: number = 1;
  // policyNumber: any;
  constructor(private fb: FormBuilder) {
    this.intimateForm = this.fb.group({
      id: ['1'],
      policyNumber: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      imeiNumber: ['', [Validators.required]],
      loanAccountNumber: ['', [Validators.required]]
    });

    this.trackForm = this.fb.group({
      claimRef: ['', Validators.required],
      loanNumber: ['', Validators.required]
    });
  }

  onIntimateSubmit() {
    this.intimateForm.value.id = this.countId++;
    this.listOfData.push({ ...this.intimateForm.value });
    if (this.intimateForm.valid) {
      console.log("Intimate Claim Data:", this.intimateForm.value);
    }
  }

  onTrackSubmit() {
    if (this.trackForm.valid) {
      console.log("Track Claim Data:", this.trackForm.value);
    }
  }

  get f() {
    return this.intimateForm.contains;
  }
}
