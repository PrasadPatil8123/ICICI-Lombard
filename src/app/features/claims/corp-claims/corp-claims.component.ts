import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidators } from '../customValidators';
import { HealthClaimsService } from '../shared/health-claims.service';

@Component({
  selector: 'app-corp-claims',
  templateUrl: './corp-claims.component.html',
  styleUrls: ['./corp-claims.component.css']
})
export class CorpClaimsComponent {
  intimateForm: FormGroup;
  trackForm: FormGroup;
  public mail: any = "customersupport@icicilombard.com";

  intimateClaim: FormGroup;
  public intimateClaimDataList: any = []
  public intimateClaimCountId: number = 1;

  trackClaim: FormGroup;
  public trackClaimsListData: any = []
  public trackClaimsCountId: number = 1;

  // policyNumber: any;
  constructor(private fb: FormBuilder, private getService: HealthClaimsService) {

    sessionStorage.setItem('id', `${this.mail}`);

    this.intimateForm = this.fb.group({
      // id: ['1'],
      policyNumber: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      imeiNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      loanAccountNumber: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.trackForm = this.fb.group({
      id: [''],
      claimRef: ['', Validators.required],
      loanNumber: ['', Validators.required]
    });

    this.intimateClaim = fb.group({
      id: [''],
      policyNumber: ['', [Validators.required]],
      policyStartDate: ['', [Validators.required]]
    })
    this.trackClaim = fb.group({
      // id: [''],
      claimRefNumber: ['', [Validators.required]],
      lossDate: ['', [Validators.required]]
    })
  }

  onIntimateSubmit() {
    this.getService.onSendappMobileIntimateClaim(this.intimateForm.value).subscribe((res: any) =>
      console.log(res)
    )
    this.intimateForm.reset();
  }

  onTrackSubmit() {
    this.getService.onSendTrackClaim(this.trackForm.value).subscribe((res: any) => {
      console.log(res);
      alert("Data submit successfully !!");
    })
    this.trackForm.reset();
  }

  public intimateClaimSubmit() {
    this.getService.onSendCorporateIntimateClaims(this.intimateClaim.value).subscribe((res: any) => {
      console.log(res);
    })
    alert("Data submit successfully !!");
    this.intimateClaim.reset();
  }
  public trackClaimSubmit() {
    this.getService.onSendCorporateTrackClaims(this.trackClaim.value).subscribe((res: any) => {
      console.log(res);
    })
    alert("Data submit successfully !!");
    this.trackClaim.reset();
  }

  get f() {
    return this.intimateForm.controls;
  }
}
