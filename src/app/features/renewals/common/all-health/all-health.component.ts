import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-all-health',
  templateUrl: './all-health.component.html',
  styleUrls: ['./all-health.component.css']
})
export class AllHealthComponent implements OnInit {
  @Input() title!: string;
  @Input() benefits!: { url: string; text: string }[];
  @Input() options: any[] = [];

  public selectedOption = 'policy';
  public text = "You can get your existing policy number through your policy document";

  public policyNumber: any;
  public phoneNumber: any;
  public loanAccountNumber: any;

  public selectedPolicy: any;


  //  phone
  public selectedPhone: any;

  // loanAccount
  public selectedLoanAccount:any;


  form!: FormGroup;

  constructor(private fb: FormBuilder, private homeService: HomeService) { }

  ngOnInit() {
    this.form = this.fb.group({
      selectedOption: ['policy', Validators.required],
      enteredValue: ['', Validators.required]
    });

    this.onOptionChangeInternal('policy');
  }

  onOptionChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.form.get('selectedOption')?.setValue(selectedValue);
    this.form.get('enteredValue')?.reset(); // reset input field
    this.onOptionChangeInternal(selectedValue);
  }

  private onOptionChangeInternal(value: string) {
    this.selectedOption = value;

    if (value === 'policy') {
      this.text = "You can get your existing policy number through your policy document";
    } else if (value === 'phone') {
      this.text = "10 digit registered mobile number";
    } else if (value === 'loan') {
      this.text = "Loan account number is printed on loan document / statement";
    }
  }

  proceed() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const selectedOption = this.form.value.selectedOption;

    const enteredValue = this.form.value.enteredValue?.trim()


    // policy

    if (this.selectedOption === "policy") {
      this.homeService.getPolicyByPolicyNumber(enteredValue).subscribe((resp: any) => {
        console.log("Entered Policy Number:", enteredValue);


        if (Array.isArray(resp) && resp.length > 0) {
          const matchedPolicy = resp.find(item =>
            item.policyNumber?.trim() === enteredValue
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


    // phone

    if (selectedOption === "phone") {

      this.homeService.getPolicyByPhoneNumber(enteredValue).subscribe((resp: any) => {
        console.log("Entered Phone Number:", enteredValue);


        if (Array.isArray(resp) && resp.length > 0) {
          const matchedPhone = resp.find(item =>
            item.phoneNumber?.trim() === enteredValue
          );

          if (matchedPhone) {
            this.selectedPhone = matchedPhone;
            console.log("✅ Phone Number matched:", matchedPhone);
          } else {
            this.selectedPhone = null;
            console.log("❌ No matching phone number found");
          }
        } else {
          this.selectedPhone = null;
          console.log("❌  No matching phone number found");
        }

        this.phoneNumber = ""
      });

    }

    // loan Account Number


    if (selectedOption === "loan") {

      this.homeService.getPolicyByLoanAccountNumber(enteredValue).subscribe((resp: any) => {
        console.log("Entered Loan Account Number:", enteredValue);


        if (Array.isArray(resp) && resp.length > 0) {
          const matchedLoanNumber = resp.find(item =>
            item.loanAccountNumber?.trim() === enteredValue
          );

          if (matchedLoanNumber) {
            this.selectedPhone = matchedLoanNumber;
            console.log("✅ Loan Account Number matched:", matchedLoanNumber);
          } else {
            this.selectedPhone = null;
            console.log("❌ No matching account number found");
          }
        } else {
          this.selectedPhone = null;
          console.log("❌  No matching account number found");
        }

        this.loanAccountNumber = ""
      });

    }
  }
}