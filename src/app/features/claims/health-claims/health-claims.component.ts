import { Component } from '@angular/core';
import { HealthClaimsService } from '../shared/health-claims.service';

@Component({
  selector: 'app-health-claims',
  templateUrl: './health-claims.component.html',
  styleUrls: ['./health-claims.component.css']
})
export class HealthClaimsComponent {
  public takeCareImg: string = "../../../../assets/claimsModuleImages/download.svg"
  public googlePlayImg: string = "../../../../assets/claimsModuleImages/google-play.svg"
  public appStoreImg: string = "../../../../assets/claimsModuleImages/app-store.svg"
  public videoImg: string = "../../../../assets/claimsModuleImages/video-img.svg";
  public dataImages: string = "../../../../assets/claimsModuleImages/data-img.svg";
  public glossaryImg = "../../../../assets/claimsModuleImages/glossary-illustration.svg";

  public showDateInput: any = '';


  public allHealthClaimData:any=[];
  public claimIdCount:number =1;
  public objectOfHealth={
    id:1,
    claimNumber:'',
    claimsDay:''
  }

  onSendDataClaimsProcess(){
    this.objectOfHealth.id =  this.claimIdCount++;
    this.allHealthClaimData.push({...this.objectOfHealth});
    console.log(this.allHealthClaimData);
    
  }
  selectedOption = 'emergency';

  selectOption(option: string) {
    this.selectedOption = option;
  }

  public headingOfTable = ['List of Documents', 'Hospitalisation Claim', 'Pre / Post Hospitalisation Claim', 'Out Patient Claim'];
  public rows: any = [];
  public assistanceItems: any = [];
  public connectOptions: any = [];
  public blogArticles: any = [];
  constructor(private healthService: HealthClaimsService) {
    this.onGetReimbursement()
    this.onGetAssistance()
    this.onGetConnectOptions()
    this.onGetblogArticles()

  }
  // reimbursement hospital data
  public onGetReimbursement() {
    this.healthService.onGetData().subscribe((res: any) => {
      this.rows = res;
    })
  }
  // assistance Items data
  public onGetAssistance() {
    this.healthService.onGetAssistanceData().subscribe((res: any) => {
      this.assistanceItems = res
    });
  }
  // connect Options data
  public onGetConnectOptions() {
    this.healthService.onGetConnectiOptions().subscribe((res: any) => {
      this.connectOptions = res;
    })
  }

  //blogArticles data
  public onGetblogArticles() {
    this.healthService.onGetBlogArticles().subscribe((res: any) => {
      this.blogArticles = res;
    })
  }



}
