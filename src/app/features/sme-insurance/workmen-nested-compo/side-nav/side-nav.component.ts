import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
@Output() loginSuccess = new EventEmitter<boolean>();

  username = '';
  password = '';

  login() {
    if (this.username === 'nilesh' && this.password === '123') {
      this.loginSuccess.emit(true);
    } else {
      this.loginSuccess.emit(false);
    }
  }
}