import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SavedQuote } from '../services/user-view';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-saved-quotes',
  templateUrl: './saved-quotes.component.html',
  styleUrls: ['./saved-quotes.component.css']
})
export class SavedQuotesComponent {

  savedQuotes: SavedQuote[] = [];
  userId:any;

  constructor(private userDataService: UserDataService) {
    
  }

    ngOnInit() {
    this.userId = this.userDataService.getUserId();
    this.userDataService.loadUserData(this.userId).subscribe(data => {
      this.savedQuotes = data.savedQuotes;

    });
   }
}
