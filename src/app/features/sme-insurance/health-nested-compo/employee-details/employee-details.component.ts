import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
corporateDetails:any=[]
form:any=[]

  constructor(private act : ActivatedRoute,private router:Router,private fb:FormBuilder,private http :HttpClient){
     this.form = this.fb.group({
      isFirstPolicy: ['', Validators.required],
      policySource: ['', Validators.required],
      existingPolicyLives: ['', Validators.required],
      claimAmount: ['', Validators.required],
      startDate: ['', Validators.required],
      employeeCount: [10, [Validators.required, Validators.min(1)]],
      familyDefinition: ['', Validators.required],
      sumInsured: ['', Validators.required]
    });
  }
ngOnInit(){
  
  this.act.queryParams.subscribe(params => {
    this.corporateDetails=params
  console.log(this.corporateDetails)
  });
}

goback(){
 this.router.navigateByUrl("sme/group-health")
}


increment() {
    this.form.get('employeeCount')?.setValue(this.form.get('employeeCount')?.value + 1);
  }

  decrement() {
    const current = this.form.get('employeeCount')?.value;
    if (current > 1) {
      this.form.get('employeeCount')?.setValue(current - 1);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post('http://localhost:3000/employees', this.form.value).subscribe(response => {
        alert('Form submitted successfully!');
      });
    } else {
      alert('Please fill all required fields.');
    }
  }

  // ==========



}
