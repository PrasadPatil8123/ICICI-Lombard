import { Component } from '@angular/core';
import { HealthClaimsService } from '../shared/health-claims.service';

@Component({
  selector: 'app-partner-hospital',
  templateUrl: './partner-hospital.component.html',
  styleUrls: ['./partner-hospital.component.css']
})
export class PartnerHospitalComponent {
  searchType = '';
  city = '';
  popularCities = ['Mumbai', 'Pune', 'Hyderabad', 'Bengaluru', 'New Delhi'];
  public allHospitals: any = [];
  constructor(private healthServices: HealthClaimsService) {
    this.onGetHospitalNameList()
  }
  public onGetHospitalNameList() {
    this.healthServices.hospitalListName().subscribe((res: any) => {
      this.allHospitals = res;
    })
  }


  filteredHospitals = [...this.allHospitals];

  filterHospitals() {
    const term = this.city.trim().toLowerCase();
    if (term === '') {
      this.filteredHospitals = [...this.allHospitals];
    } else {
      this.filteredHospitals = this.allHospitals.filter((h: { city: string; }) =>
        h.city.toLowerCase().includes(term)
      );
    }
  }

  selectCity(city: string) {
    this.city = city;
    this.filterHospitals();
  }
}
