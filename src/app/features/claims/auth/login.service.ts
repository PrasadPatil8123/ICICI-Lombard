import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private loggedIn: boolean = true;

  isLoggedIn() {
    return this.loggedIn;
  }

  public onGetData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  public onGetDataSecond(id: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).toPromise();
  }
}
