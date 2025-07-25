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

  public trackListData: any = [];
  public trackCountId: number = 1;

  intimateClaim: FormGroup;
  public intimateClaimDataList: any = []
  public intimateClaimCountId: number = 1;

  trackClaim: FormGroup;
  public trackClaimsListData: any = []
  public trackClaimsCountId: number = 1;

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
      id: [''],
      claimRef: ['', Validators.required],
      loanNumber: ['', Validators.required]
    });

    this.intimateClaim = fb.group({
      id: [''],
      policyNumbe: [''],
      policyStartDate: ['']
    })
    this.trackClaim = fb.group({
      id: [''],
      claimRefNumber: [''],
      lossDate: ['']
    })
  }

  onIntimateSubmit() {
    this.intimateForm.value.id = this.countId++;
    this.listOfData.push({ ...this.intimateForm.value });
    if (this.intimateForm.valid) {
      console.log("Intimate Claim Data:", this.intimateForm.value);
    }
  }

  onTrackSubmit() {
    this.trackForm.value.id = this.trackCountId++;
    this.trackListData.push({ ...this.trackForm.value });
    if (this.trackForm.valid) {
      console.log("Track Claim Data:", this.trackForm.value);
    }
  }

  public intimateClaimSubmit() {
    this.intimateClaim.value.id = this.intimateClaimCountId++;
    this.intimateClaimDataList.push({ ...this.intimateClaim });
    console.log(this.intimateClaimDataList);

  }
  public trackClaimSubmit() {
    this.trackClaim.value.id = this.trackClaimsCountId++;
    this.trackClaimsListData.push({ ...this.trackClaim })
    console.log(this.trackClaimsListData);

  }

  get f() {
    return this.intimateForm.contains;
  }
}
