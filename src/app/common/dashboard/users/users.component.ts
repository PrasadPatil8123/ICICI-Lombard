import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { PersonalDetails } from '../services/user-view';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public userId:any;
  personalDetails: PersonalDetails[]= []

  constructor(private route: ActivatedRoute , private userDataService : UserDataService) {
    
  }

  ngOnInit() {
  this.userId = this.userDataService.getUserId();
   this.userDataService.loadUserData(this.userId).subscribe(data => {
      this.personalDetails = data.personalDetails
    });
  }
}
