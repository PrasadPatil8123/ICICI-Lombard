import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthClaimsService {

  constructor(private http: HttpClient) { }

   public onGetData(): Observable<any> {
    return this.http.get('http://localhost:3000/reimbursementClaim');
  }

  public assistanceItems = [
    {
      title: 'Doctor search',
      description: 'Locating the nearest network physician/specialist',
      icon: 'assets/claimsModuleImages/dr.svg'
    },
    {
      title: 'Appointment booking',
      description: 'Scheduling an appointment with an empanelled doctor',
      icon: 'assets/claimsModuleImages/app booking.svg'
    },
    {
      title: 'Second opinion',
      description: 'Booking an appointment for an alternate medical opinion.',
      icon: 'assets/claimsModuleImages/second-op.svg'
    },
    {
      title: 'Hospitalisation assistance',
      description: 'Sharing suitable options for hospitals and other cashless facilities.',
      icon: 'assets/claimsModuleImages/pre-hospital.svg'
    },
    {
      title: 'Medical information',
      description: 'Giving preventive information on ailments',
      icon: 'assets/claimsModuleImages/Medical-info.svg'
    },
    {
      title: 'Post-hospitalisation care',
      description: 'Providing guidance for physiotherapy, nursing at home, etc.',
      icon: 'assets/claimsModuleImages/HA.svg'
    }
  ];
  public onGetAssistanceData() {
    return of(this.assistanceItems);
  }

  public connectOptions = [
    {
      icon: 'assets/claimsModuleImages/call.svg',
      title: 'Call',
      value: '040 6627 4205',
      link: 'tel:04066274205'
    },
    {
      icon: 'assets/claimsModuleImages/app.svg',
      title: 'Submit your queries',
      value: 'IL TakeCare app > Service We Offer > Health Assistance',
      link: null
    },
    {
      icon: 'assets/claimsModuleImages/web.svg',
      title: 'Web Link',
      value: 'https://ilhc.icicilombard.com/home/healthassistance',
      link: 'https://ilhc.icicilombard.com/home/healthassistance'
    },
    {
      icon: 'assets/claimsModuleImages/mail.svg',
      title: 'Write to us at',
      value: 'healthassistance@icicilombard.com',
      link: 'mailto:healthassistance@icicilombard.com'
    }
  ];
  public onGetConnectiOptions() {
    return of(this.connectOptions);
  }

  // public blogArticles = [
  //   {
  //     title: 'Health Insurance Options for Low Income Individuals',
  //     description:
  //       'Health insurance options for low-income individuals include various government schemes and affordable plans. Coverage provides essential medical protection with specific eligibility criteria.',
  //     date: '2025-02-24',
  //   },
  //   {
  //     title: 'Guide to Individual vs Family Insurance Deductibles',
  //     description:
  //       'Individual and family deductibles differ in coverage scope and cost implications. Understanding these differences helps choose appropriate health insurance plans for personal or family needs.',
  //     date: '2025-02-24',
  //   },
  //   {
  //     title: 'Understanding Family Health Insurance Deductibles',
  //     description:
  //       'Comprehensive explanation of family health insurance deductibles covering terms conditions and practical considerations for policy selection and usage.',
  //     date: '2025-02-24',
  //   },
  // ];

  public onGetBlogArticles() {
    return this.http.get("http://localhost:3000/blogArticles");
  }

  public hospitalListName() {
    return this.http.get('http://localhost:3000/allHospitals');
  }
}
