import { Component } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent {
  public title:string = "Bike Insurance Renewal";
  public subTitle:string = "Please Enter Your Bike Policy Number";
  public policyNo:string = "Policy No"

  // table 

  public tableHead:any = ["Product", "Product Code", "UIN No."];

  public tableData = [
  {
    product: "Two Wheeler Vehicle Package Policy (Tenure 1, 2 and 3 years)",
    productCode: "3005/P5",
    UIN: "IRDA/N115RP0015V05201415"
  },
  {
    product: "5 Years – Two Wheeler Liability Policy",
    productCode: "3005/A5",
    UIN: "IRDA/N115RP0003V01201819"
  },
  {
    product: "Standalone third party long term two wheeler insurance policy",
    productCode: "3005/A",
    UIN: "IRDA/N115RP0016V01201415"
  },
  {
    product: "Two wheeler liability policy",
    productCode: "3005/A",
    UIN: "IRDA/N115RP0016V01200102"
  },
  {
    product: "Stand-alone own damage two wheeler insurance policy",
    productCode: "3005/O",
    UIN: "IRDA/N115RP0002V02201920"
  },
  {
    product: "Bundled two wheeler policy",
    productCode: "3005/1B5",
    UIN: "IRDA/N115RP0019V01202122"
  }
];
  // disclaimer para 

  public para1:string = 'Disclaimers: *If there is any revision in Motor Third Party (TP) rates, the    difference in premium due to the revised rates will be payable by the policyholder immediately, and if such revised premium is not paid then the motor insurance policy will not be valid.'
 
  public para2:string = ` *We have masked your personal information for security.`

  // disclaimer link

  onDisclaimer(){
    console.log("Navigate to Discliamer Page")

  }


}
