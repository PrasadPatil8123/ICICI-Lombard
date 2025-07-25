import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelInsuranceFormComponent } from './travel-insurance-form/travel-insurance-form.component';
import { TravelInsuranceComponent } from './travel-insurance/travel-insurance.component';
import { SingleTripComponent } from './single-trip/single-trip.component';
import { GoldMultiTripComponent } from './gold-multi-trip/gold-multi-trip.component';
import { StudentTravelComponent } from './student-travel/student-travel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TravelInsuranceService } from './services/travel-insurance.service';
import { CurrencySymbolPipe } from './pipe/currency-symbol.pipe';
import { FormsModule } from '@angular/forms';

// primeng module
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from 'primeng/inputmask';
// import { FloatLabelModule } from 'primeng/floatlabel';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    TravelInsuranceFormComponent,
    TravelInsuranceComponent,
    SingleTripComponent,
    GoldMultiTripComponent,
    StudentTravelComponent,
    CurrencySymbolPipe
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    SelectButtonModule,
    FormsModule,
    RadioButtonModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputMaskModule,
    MultiSelectModule,
    CardModule,
    TabViewModule
  ],
   exports: [
    TravelInsuranceFormComponent, // if used in other modules
    TravelInsuranceComponent,
     SingleTripComponent,
    GoldMultiTripComponent,
    StudentTravelComponent
  ],
  providers: [
    TravelInsuranceService
  ]

})
export class TravelInsuranceModule {
  
 }
