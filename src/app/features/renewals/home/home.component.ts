import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public title:string = "Renew Home insurance policy";

  public subtitle:string = "Insure your home instantly online";

  public product:string = "Product: Complete Home Protect, Product Code: 4119, UIN No. IRDAN115RP0013V02202122"


  public myForm:any;
  public types:any = ["Policy", "Mobile"];
  public label:string = "Policy Number";
  public placeholder:string = "ICICI Lombard policy number";
  public buttonLabel:string = "Proceed"

  constructor(private fb : FormBuilder){
    this.myForm = this.fb.group({

    })

  }

}
