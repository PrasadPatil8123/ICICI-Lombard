import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalDetails } from 'src/app/common/dashboard/services/user-view';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  StoreFormData(data:any){
    return this.http.post('http://localhost:3000/HealthContactDetails',data);
  }

  StoreUserData(data:any){
    return this.http.post('http://localhost:3000/personalDetails',data);
  }

  fetchExistingData(){
    return this.http.get('http://localhost:3000/personalDetails')
  }

  getPersonalDetails(): Observable<PersonalDetails[]> {
    return this.http.get<PersonalDetails[]>('http://localhost:3000/personalDetails');
  }

  findUserIdByMobile(details: PersonalDetails[], mobile: string): number | null {
    const match = details.find(detail => detail.mobile === mobile);
    return match ? match.id : null;
  }


}
