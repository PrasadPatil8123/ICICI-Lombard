import { Component, ElementRef, ViewChild } from '@angular/core';
import { HealthClaimsService } from '../shared/health-claims.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-partner-hospital',
  templateUrl: './partner-hospital.component.html',
  styleUrls: ['./partner-hospital.component.css']
})
export class PartnerHospitalComponent {
  userForm: FormGroup;
  searchType = '';
  city = '';
  popularCities = ['Mumbai', 'Pune', 'Hyderabad', 'Bengaluru', 'New Delhi'];
  public allHospitals: any = [];
  constructor(private healthServices: HealthClaimsService, private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      city: ['', Validators.required]
    });
    this.onGetHospitalNameList()
  }
  public onGetHospitalNameList() {
    this.healthServices.hospitalListName().subscribe((res: any) => {
      this.allHospitals = res;
    })
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }


  filteredHospitals = [...this.allHospitals];

  filterHospitals() {
    const term = this.city.trim().toLowerCase();
    if (term === '') {
      this.filteredHospitals = [...this.allHospitals];
    } else {
      this.filteredHospitals = this.allHospitals.filter((h: { city: string; }) =>
        h.city.toLowerCase().includes(term)
      );
    }
  }

  selectCity(city: string) {
    this.city = city;
    this.filterHospitals();
  }

  addHospitalData: any = [];

  user = {
    id: '',
    name: '',
    phone: '',
    pincode: '',
    city: ''
  };
  @ViewChild('formModal') formModal!: ElementRef;
  onSubmitData() {
    this.addHospitalData.push({ ...this.user });
    console.log('Form Submitted:', this.addHospitalData);
    const modalInstance = bootstrap.Modal.getInstance(this.formModal.nativeElement);
    modalInstance.hide();
    this.router.navigateByUrl('claims/commanTable/' + JSON.stringify(this.addHospitalData));

  }
}
