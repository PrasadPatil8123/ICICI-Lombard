import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Payment } from '../services/user-view';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
payments: Payment[] = [];
  userId = 2;

  constructor(private http: HttpClient, private messageService: MessageService) {}

  ngOnInit() {
    this.http.get<Payment[]>('http://localhost:3000/payments')
      .subscribe(data => {
        this.payments = data.filter(p => p.userId === this.userId);
        if (this.payments.length > 0) {
          this.messageService.add({ severity: 'success', summary: 'Loaded', detail: 'Payment history found.' });
        }
      });
  }

}
