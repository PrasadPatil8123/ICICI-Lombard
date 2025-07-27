import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Payment, Policy, SavedQuote, UserView } from './user-view';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

//   constructor(private http :HttpClient) { }
//   getUserData(userId: number): Observable<UserView> {
//   return forkJoin({
//     // personalDetails: this.http.get<PersonalDetails[]>('.../personalDetails'),
//     policies: this.http.get<Policy[]>('/policies'),
//     payments: this.http.get<Payment[]>('/payments'),
//     savedQuotes: this.http.get<SavedQuote[]>('.../savedQuotes')
//   }).pipe(
//     map(data => ({
//       // profile: data.personalDetails.find(u => u.id === userId),
//       policies: data.policies.filter(p => p.userId === userId && p.status),
//       payments: data.payments.filter(p => p.userId === userId),
//       // quotes: data.savedQuotes.filter(q => q.userId === userId)
//     }))
//   );
// }
}

