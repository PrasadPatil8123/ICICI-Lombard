import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { Payment, PersonalDetails, Policy, SavedQuote } from './user-view';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userId: number | null = null;

  setUserId(id: number) {
    this.userId = id;
  }

  getUserId(): number | null {
    return this.userId;
  }


  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private messageService: MessageService) {}

  /** Load all user-related data in parallel */
  loadUserData(userId: number): Observable<{ payments: Payment[]; policies: Policy[]; savedQuotes: SavedQuote[] ; personalDetails : PersonalDetails[]}> {
    return forkJoin({
      payments: this.http.get<Payment[]>(`${this.baseUrl}/payments`).pipe(
        map(payments => {
          const userPayments = payments.filter(p => p.userId === userId);
          if (userPayments.length > 0) {
            this.messageService.add({ severity: 'success', summary: 'Payments', detail: 'Payment history found.' });
          }
          return userPayments;
        })
      ),
      policies: this.http.get<Policy[]>(`${this.baseUrl}/policies`).pipe(
        map(policies => policies.filter(p => p.userId === userId))
      ),
      savedQuotes: this.http.get<SavedQuote[]>(`${this.baseUrl}/savedQuotes`).pipe(
        map(quotes => quotes.filter(q => q.userId === userId && q.status === 'saved'))
      ),
      personalDetails : this.http.get<PersonalDetails[]>(`${this.baseUrl}/personalDetails`).pipe(
        map(details => details.filter(d =>d.id === userId))
      )
    });
  }

}

