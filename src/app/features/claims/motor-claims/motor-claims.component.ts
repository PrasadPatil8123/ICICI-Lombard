import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HealthClaimsService } from '../shared/health-claims.service';
declare var bootstrap: any;

@Component({
  selector: 'app-motor-claims',
  templateUrl: './motor-claims.component.html',
  styleUrls: ['./motor-claims.component.css']
})
export class MotorClaimsComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  display = false;

  @ViewChild('addformModal', { static: false }) addformModal!: ElementRef;
  @ViewChild('formModal', { static: false }) formModal!: ElementRef;
  @ViewChild('policyModalRef') policyModalRef!: ElementRef;
  public allCarDetails: any = [];



  registration: any;
  public registrationNumber: any = []
  public countID: number = 1;
  vehicleForm!: FormGroup;
  mobileForm: FormGroup;
  policyForm: FormGroup;
  constructor(private fb: FormBuilder, private getServeice: HealthClaimsService) {
    this.vehicleForm = this.fb.group({
      // id: [''],
      policyNo: ['', Validators.required],
      vehicleReg: ['', Validators.required],
      raiseTypeCar: ['', Validators.required]
    });

    this.mobileForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]]
    });

    this.policyForm = this.fb.group({
      policyNo: ['', Validators.required],
      policyNumber: ['', Validators.required],
      vehicleReg: ['', Validators.required],
      vehicleRegNo: ['', Validators.required]
    });
  }

  public onGetDataFormUser() {
    this.allCarDetails.push({ ...this.vehicleForm.value })
    console.log(this.allCarDetails);
    this.getServeice.onSendVehicleRaiseClaimData(this.vehicleForm.value).subscribe((res: any) => {
      console.log(res);
    })
    const modalInstance = bootstrap.Modal.getInstance(this.addformModal.nativeElement);
    modalInstance.hide();
    this.vehicleForm.reset();
  }

  public onGetOtp() {
    console.log(this.mobileForm.value);
    let otp = ''
    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    const modalInstance = bootstrap.Modal.getInstance(this.formModal.nativeElement);
    modalInstance.hide();
    alert("OTP " + otp);

    this.mobileForm.reset();
  }

  public onSubmitData() {
    console.log(this.policyForm.value);
    this.getServeice.onSendvehicleInformation(this.policyForm.value).subscribe((res: any) => {
      console.log(res);
    })
    this.policyForm.reset();
    const modal = bootstrap.Modal.getInstance(this.policyModalRef.nativeElement);
    modal.hide();
  }
  public claimMethods: any = []
  public serviceDoorstep: any = [];
  public claimSteps: any = [];
  public claimSteps2: any = [];
  public faqs: any = [];
  ngOnInit() {
    this.getServeice.onGetclaimMethodsData().subscribe((res: any) => {
      this.claimMethods = res;
    })
    this.getServeice.onGetserviceDoorstepData().subscribe((res: any) => {
      this.serviceDoorstep = res;
    })
    this.getServeice.onGetclaimStepsData().subscribe((res: any) => {
      this.claimSteps = res;
    })
    this.getServeice.onGetclaimSteps2Data().subscribe((res: any) => {
      this.claimSteps2 = res;
    })
    this.getServeice.onGetfaqsData().subscribe((res: any) => {
      this.faqs = res;
    })
  }

}
