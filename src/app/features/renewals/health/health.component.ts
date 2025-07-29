import { Component } from '@angular/core';
import { SharedDataService } from '../shared/services/shared-data.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  public title:string = `Renew my 
                         health policy`;

  public benefits:any = [
    {
      url: "./assets/renewals/all_and_health/quick-renwl.svg",
      text: "Quick and easy renewal"
    },

    {
      url: "./assets/renewals/all_and_health/ren_benefits.svg",
      text: "Avail renewal benefits"
    }
  ]

  public options:any = []
  
  constructor(private sharedData:SharedDataService){
    this.options = this.sharedData.options
  }

  // table

   public tableHead:any = ["Product", "Product Code", "UIN No."];

  public tableData = [
  {
    product: "ICICI Lombard Complete Health Insurance",
    productCode: "4128",
    UIN: "ICIHIP23144V072223"
  },
  {
    product: "Befit Rider",
    productCode: "4180",
    UIN: "ICIHIP21569V012021"
  },
  {
    product: "Health Booster",
    productCode: "4140",
    UIN: "ICIHIP22100V032122"
  },
  {
    product: "Personal Protect Policy",
    productCode: "4111",
    UIN: "ICIPAIP22076V042122"
  },
  {
    product: "Arogya Sanjeevani Policy",
    productCode: "4171",
    UIN: "ICIHIP20178V011920"
  },
  {
    product: "Health AdvantEdge",
    productCode: "4193",
    UIN: "ICIHIP23075V032223"
  },
  {
    product: "Golden Shield",
    productCode: "4192",
    UIN: "ICIHIP22012V012223"
  },
  {
    product: "Saral Suraksha Bima, ICICI Lombard",
    productCode: "",
    UIN: "ICIPAIP21626V012021"
  }
];

public para1:string = `Disclaimers: *The BeFit Rider can only be bought along with Health AdvantEdge (ICIHLIP23075V032223) or Health Booster (ICIHLIP22100V032122) or ICICI Lombard Arogya Sanjeevani (ICIHLIP20178V011920) Products and cannot be bought in isolation or as a separate product.`

}
