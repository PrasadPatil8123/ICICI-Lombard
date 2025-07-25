import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelInsuranceService } from '../services/travel-insurance.service';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-travel-insurance-form',
  templateUrl: './travel-insurance-form.component.html',
  styleUrls: ['./travel-insurance-form.component.css']
})
export class TravelInsuranceFormComponent implements OnInit{


   constructor(private fb:FormBuilder, private insuranceService:TravelInsuranceService){}
 
// trip type
    tripTypes = [
  { label: 'Single trip', value: 'single' },
  { label: 'Multi trip', value: 'multi' }
];
 tripType: string = 'single'; 

//  for geography
   geoOrCountry: string = 'geography';  
   selectedRegion: string = '';
    regionOptions = [
    { label: 'USA or Canada', img:'assets/travel-insurance/4 (2).png', value: 'usa' },
    { label: 'Asia',img:'assets/travel-insurance/4.png', value: 'asia' },
    { label: 'Schengen', img:'assets/travel-insurance/5.png', value: 'schengen' },
    { label: 'Rest of the world', img:'assets/travel-insurance/6.png', value: 'rest' }
  ];

  // country
  travellingTo: string = '';
  selectedCountries: string[] = [];
  popularCountries: string[] = [
  'Australia', 'Canada', 'Germany', 'Indonesia', 'Italy',
  'Malaysia', 'Singapore', 'Switzerland', 'Thailand', 'UK', 'USA'
];

toggleCountry(country: string): void {
  const index = this.selectedCountries.indexOf(country);
  if (index > -1) {
    this.selectedCountries.splice(index, 1); // remove if already selected
  } else {
    this.selectedCountries.push(country); // add if not selected
  }
}
clearSelectedCountries() {
  this.selectedCountries = [];
}

  // for date
  travelDate: Date | null = null;
  returnDate: Date | null = null;
  tripDuration: number | null = null;
  minDate: Date = new Date();  // today

  // Flags for showing required field errors
  showTravelDateRequiredError: boolean = false;
  showReturnDateRequiredError: boolean = false;
  dateError: string = '';

  ngOnInit(): void {
    this.minDate.setHours(0, 0, 0, 0); // Remove time component for accurate comparison
  }

  // Called on blur of travel date input
  onTravelDateBlur(): void {
      this.showTravelDateRequiredError = !this.travelDate;
    this.validateDates();
  }
  // Called on blur of return date input
  onReturnDateBlur(): void {
    if(!this.returnDate){
      this.showReturnDateRequiredError = true;
    }else{
      this.showReturnDateRequiredError = false;  
    }
    this.validateDates();
  }
  // Called when either date is selected to check validity
  validateDates(): void {
    this.dateError = '';
    this.tripDuration = null;


    if (this.travelDate && this.returnDate) {
      const travel = new Date(this.travelDate);
      const ret = new Date(this.returnDate);

      travel.setHours(0, 0, 0, 0);
      ret.setHours(0, 0, 0, 0);

      if (ret <= travel) {
        this.dateError = 'Return date must be after travel date.';
      }else {
      // Calculate duration in days
      const durationInMs = ret.getTime() - travel.getTime();
      this.tripDuration = Math.ceil(durationInMs / (1000 * 60 * 60 * 24));
    }
    }
  }

// checkbox
agreeTerms: boolean = false;
hasVisa: boolean = false;

showTermsError: boolean = false;
showVisaError: boolean = false;

// Call this before proceeding to next step / submit:
validateCheckboxes(): void {
  this.showTermsError = !this.agreeTerms;
  this.showVisaError = !this.hasVisa;
}
 

  // multi trip
    ageGroupOptions = [
    { label: '3 mo - 50 yrs', value: '3-50' },
    { label: '51 - 60 yr', value: '51-60' },
    { label: '61 - 70 yr', value: '61-70' }
  ];
  selectedAgeGroup: string = '3-50';

  tripDurationOptions = [
    { label: '30 days', value: 30 },
    { label: '45 days', value: 45 },
    { label: '60 days', value: 60 }
  ];
  selectedDuration: number = 30;

  tripStartDate: Date | null = null;

  // ✅ Submit function
  onSubmit(): void {
    this.validateDates();
    this.validateCheckboxes();

    if (
      this.showTermsError ||
      this.showVisaError ||
      this.dateError ||
      (this.tripType === 'single' && (!this.travelDate || !this.returnDate))
    ) {
      console.warn('Validation failed.');
      return;
    }

    const formData = {
      tripType: this.tripType,
      geoOrCountry: this.geoOrCountry,
      selectedRegion: this.selectedRegion,
      selectedCountries: this.selectedCountries,
      travelDate: this.travelDate,
      returnDate: this.returnDate,
      hasVisa: this.hasVisa,
      agreeTerms: this.agreeTerms,
      selectedAgeGroup: this.selectedAgeGroup,
      selectedDuration: this.selectedDuration,
      tripStartDate: this.tripStartDate
    };

    this.insuranceService.submitForm(formData).subscribe({
      next: (res) => {
        console.log('Form submitted:', res);
        alert('Form submitted successfully!');
      },
      error: (err) => {
        console.error('Submission failed:', err);
        alert('Submission failed. Try again.');
      }
    });
  }
}


