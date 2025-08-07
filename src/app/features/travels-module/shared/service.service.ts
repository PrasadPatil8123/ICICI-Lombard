import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private regions = [
    { name: 'USA or Canada' },
    { name: 'Asia' },
    { name: 'Schengen' },
    { name: 'Rest of the world' }
  ];
  constructor(private http:HttpClient) { }

      getGeographies(): Observable<any[]> {
    return of(this.regions);
  }

  submitForm(data: any): Observable<any> {
    console.log('Sending to server:', data);
    of({ success: true });
     return this.http.post('http://localhost:3000/travelForms', data);
     
  }
}
