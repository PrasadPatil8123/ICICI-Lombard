import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Payment } from '../services/user-view';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
 payments: Payment[] = [];
 userId:any;

  constructor(private userDataService : UserDataService) {
  }

  ngOnInit() {
    this.userId = this.userDataService.getUserId();
       this.userDataService.loadUserData(this.userId).subscribe(data => {
    this.payments = data.payments;
    });
   }

}
