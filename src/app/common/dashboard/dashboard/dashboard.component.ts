import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public userId:any;
  constructor(private route: ActivatedRoute , private userDataService:UserDataService) {
    
  }

  ngOnInit() {
   const param= this.route.snapshot.paramMap.get('id');
   this.userId = Number(param)
   this.userDataService.setUserId(this.userId);
  }
  
}
