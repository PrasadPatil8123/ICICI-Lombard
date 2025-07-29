import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private baseUrl = 'http://localhost:3000/form-users';

  constructor(private http: HttpClient) {}

  addUser(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }


}
