import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public detailsForm:any;
  public nextId:any;

  

  constructor(private router: Router,  private dataSer : HomeService,private fb: FormBuilder){
    this.detailsForm = this.fb.group({
      id: [],
      name:['',Validators.required],
      mobile: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        pincode: [''],
        cityState: [''],
        landmark: ['']
      }),
      additional: this.fb.group({
        notes: [''],
        lastUpdated: ['']
      })
    })
  }
  

  onSubmit() {
    this.dataSer.fetchExistingData().subscribe((res: any) => {
    this.nextId = (parseInt(res.map((item: { id: any }) => item.id).at(-1)) + 1);
    this.detailsForm.patchValue({ id: this.nextId });
    console.log(this.detailsForm.value);
     this.dataSer.StoreUserData(this.detailsForm.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['dashboard', this.nextId]);
    })
    });
  }
}