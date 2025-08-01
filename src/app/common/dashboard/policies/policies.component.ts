import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Policy } from '../services/user-view'   
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent{

 activeIndex = 0;
 policies: Policy[] = [];
 userId:any;

  constructor(private userDataService : UserDataService) {

    
  }

   ngOnInit() {
    this.userId = this.userDataService.getUserId();
    this.userDataService.loadUserData(this.userId).subscribe(data => {
     this.policies = data.policies;
    });
   }
  
  getPoliciesByStatus(status: string): Policy[] {
    return this.policies.filter(p => p.status === status);
  }
}

