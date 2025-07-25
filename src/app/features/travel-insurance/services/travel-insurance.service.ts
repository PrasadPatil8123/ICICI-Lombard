import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelInsuranceService {
 private regions = [
    { name: 'USA or Canada' },
    { name: 'Asia' },
    { name: 'Schengen' },
    { name: 'Rest of the world' }
  ];

  constructor() { }

    getGeographies(): Observable<any[]> {
    return of(this.regions);
  }

  submitForm(data: any): Observable<any> {
    console.log('Form data:', data);
    return of({ success: true });
  }
}
