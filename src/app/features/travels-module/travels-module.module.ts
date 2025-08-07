import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelComponent } from './travel/travel.component';
import { FormComponent } from './form/form.component';
import { SingleTripComponent } from './single-trip/single-trip.component';

// modules
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FilterPipe } from './shared/filter.pipe';
import { ScopeModelComponent } from './nested-compo/scope-model/scope-model.component';
import { ViseModelComponent } from './nested-compo/vise-model/vise-model.component';


const router: Routes= [
  { path: "travel", component:TravelComponent },
  { path: "form", component:FormComponent },
  { path: "single-trip", component:SingleTripComponent },
]


@NgModule({
  declarations: [
    TravelComponent,
    FormComponent,
    SingleTripComponent,
    FilterPipe,
    ScopeModelComponent,
    ViseModelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TabViewModule,
    CalendarModule,
    SelectButtonModule,
    RadioButtonModule,
    
  ]
})
export class TravelsModuleModule { }
