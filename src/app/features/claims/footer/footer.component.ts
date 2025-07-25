import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public facebookImg: string = "../../../../assets/claimsModuleImages/fb-ico.svg"
  public linkedinImg: string = "../../../../assets/claimsModuleImages/lin-ico.svg"
  public twtImg: string = "../../../../assets/claimsModuleImages/tw-ico.svg"
  public youtubeImg: string = "../../../../assets/claimsModuleImages/yt-ico.svg"
  public instagramImg: string = "../../../../assets/claimsModuleImages/inst-ico.svg"

  public entrustImg: string = "../../../../assets/claimsModuleImages/entrust.png"
  public digicertImg: string = "../../../../assets/claimsModuleImages/digicert.png"
 
   public mail: any = "customersupport@icicilombard.com";

    public companies = [
    'ICICI Group',
    'ICICI Bank',
    'ICICI Prudential Life Insurance',
    'ICICI Prudential Mutual Fund',
    'ICICI Direct',
    'ICICI Lombard General Insurance',
    'ICICI Securities'
  ];
  selectedCompany = '';

}
