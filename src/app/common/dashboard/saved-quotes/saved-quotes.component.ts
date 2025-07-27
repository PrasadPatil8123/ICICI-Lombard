import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SavedQuote } from '../services/user-view';


@Component({
  selector: 'app-saved-quotes',
  templateUrl: './saved-quotes.component.html',
  styleUrls: ['./saved-quotes.component.css']
})
export class SavedQuotesComponent implements OnInit{

  savedQuotes: SavedQuote[] = [];
  userId = 1; // dynamically inject later

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<SavedQuote[]>('http://localhost:3000/savedQuotes')
      .subscribe(data => {
        this.savedQuotes = data.filter(q => q.userId === this.userId && q.status === 'saved');
      });
  }


}
