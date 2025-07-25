import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  selectedOption = "";
  placeholder = "Please Select An Option"
  inputType = "text";

  public options = [
    {
      value: "policy",
      label: "Policy Number",
      placeholder: "ICICI Lombard Policy Number",
      type: "text",
      text: "You can get your existing policy number through your policy document"
    },

    {
      value: "phone",
      label: "Phone Number",
      placeholder: " Phone Number",
      type: "text",
      text: "10 digit registered mobile number"

    },

    {
      value: "loan",
      label: "Loan Account Number",
      placeholder: "Loan Account Number",
      type: "text",
      text: "Loan account number is printed on loan document / statement"
    }

  ]




}

