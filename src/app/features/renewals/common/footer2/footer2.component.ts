import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Footer2Component {

  public title: string = "ICICI Lombard General Insurance Company Limited";                    

  public adress: string = `414, P.Balu Marg, Off Veer Sawarkar Marg, near Siddhi-Vinayak Temple, 
                          Prabhadevi Mumbai-400025
                          Reg. No.115`

  public contactDetails:string = `Email: customersupport@icicilombard.com
                                  Fax no - 022 61961323
                                  Contact - 1800 2666`

                               



  public imageLinks: any = [
    {
      img: "./assets/renewals/footer2/facebook.png",
      url: "https://www.facebook.com/",
      title: "Facebbok"
    },

    {
      img: "./assets/renewals/footer2/likedin.png",
      url: "https://in.linkedin.com/",
      title: "Linkedin"
    },

    {
      img: "./assets/renewals/footer2/twitter.png",
      url: "https://x.com/",
      title: "twitter-x"
    },

    {
      img: "./assets/renewals/footer2/youtube.png",
      url: "https://www.youtube.com/",
      title: "Youtube"
    },

    {
      img: "./assets/renewals/footer2/instagram.jpg",
      url: "https://www.instagram.com/",
      title: "Instagram"
    },

  ]

  // right
  // para
  public para1: string = 'ICICI Lombard General Insurance Company Ltd. is one of the leading private sector general insurance company in India offering insurance coverage for motor, health, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.'

  public para2: string = 'ICICI trade logo displayed above belongs to ICICI Bank and is used by ICICI Lombard GIC Ltd. under license and Lombard logo belongs to ICICI Lombard GIC Ltd. Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale. CIN: L67200MH2000PLC129408'


  // images
  public images:any = [
    {
      img :"./assets/renewals/footer2/entrust.png",
      name : "Entrust Image"
    },

    {
      img : "./assets/renewals/footer2/digicert.png",
      name : "Digital Image"
    }
  ]

  // Dropdown
  public companies :any = [
    "ICICI Bank",
    "ICICI Group",
    "ICICI Prodential Life Insurance",
    "ICICI Prodential Mutual Fund",
    "ICICI Direct",
    "ICICI Home Finance",
    "ICICI Home Search"
  ]
}

