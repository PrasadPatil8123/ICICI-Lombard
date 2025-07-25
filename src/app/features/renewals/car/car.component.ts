import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  constructor(private router:Router){

  }

  public title: string = "Car Insurance Renewal";
  public subTitle: string = "Choose below option to retrieve your policy";
  public policyNo: any = "Policy No"


  // table 

  public tableHead:any = ["Product", "Product Code", "UIN No."];

  public tableData: any = [
    {
      product: "3 Years - Private Car Liability Policy",
      productCode: "3001/A3",
      UIN: "IRDAN115RP0002V01201819"
    },
    {
      product: "Private car liability policy",
      productCode: "3001/A",
      UIN: "IRDAN115RP0012V01200102"
    },
    {
      product: "Private car package policy",
      productCode: "3001",
      UIN: "IRDAN115RP0017V01200102"
    },
    {
      product: "Stand-alone own damage private car insurance policy",
      productCode: "3001/O",
      UIN: "IRDAN115RP0001V02201920"
    },
    {
      product: "Bundled - Private Car Policy",
      productCode: "3001/1B3",
      UIN: "IRDAN115RP0021V02202122"
    }
  ];

  // disclaimer para 

  public para1:string = 'Disclaimers: *If there is any revision in Motor Third Party (TP) rates, the    difference in premium due to the revised rates will be payable by the policyholder immediately, and if such revised premium is not paid then the motor insurance policy will not be valid.'
 
  public para2:string = ` *We have masked your personal information for security.`

  // disclaimer link

  onDisclaimer(){
    this.router.navigate(["disclaimers"])

  }
}