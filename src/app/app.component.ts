import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'icici-lombard';

  constructor() {
    sessionStorage.setItem('token', '6dcba45g39cf6h8559floghh55ff77');
  }
}