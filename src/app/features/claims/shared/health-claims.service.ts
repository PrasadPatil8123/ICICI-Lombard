import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthClaimsService {

  constructor(private http: HttpClient) { }

  public reimbursementClaim = [
    { name: 'Claim Form', hospitalisation: '✔', prePost: '✔', outPatient: '✔' },
    { name: 'KYC Form', hospitalisation: '✔', prePost: '✘', outPatient: '✔' },
    { name: 'NEFT Form', hospitalisation: '✔', prePost: '✘', outPatient: '✔' },
    { name: 'Cancelled Cheque Copy', hospitalisation: '✔', prePost: '✔', outPatient: '✔' },
    { name: 'Health Card Copy', hospitalisation: '✔', prePost: '✔', outPatient: '✔' },
    { name: 'Government-issued ID proof', hospitalisation: '✔', prePost: '✔', outPatient: '✔' },
    { name: 'Discharge summary (with details of complaint & treatment availed)', hospitalisation: '✔', prePost: '✘', outPatient: '✘' },
    { name: 'Final hospital bill (with detailed break-up), along with interim bills & payment receipts', hospitalisation: '✔', prePost: '✔', outPatient: '✔' },
    { name: 'All investigation reports (blood reports, X-rays, sonography, CT scan, MRI etc)', hospitalisation: '✔', prePost: '✔', outPatient: '✔' },
    { name: 'All pharmacy bills supported by doctor s prescription', hospitalisation: '✔', prePost: '✔', outPatient: '✔' },
    { name: 'Implant sticker / invoice, if used (eg: lens details in cataract case, stent details in angioplasty)', hospitalisation: '✔', prePost: '✔', outPatient: '✔' },
    { name: 'In specific cases, a Medico Legal Certificate (MLC) is needed. An FIR copy is required for all accidental cases.', hospitalisation: '✔', prePost: '✔', outPatient: '✔' },
    { name: 'In case of miscellaneous charges, we require bills with supporting prescription of the treating doctor', hospitalisation: '✔', prePost: '✔', outPatient: '✔' },

  ];
  public onGetData(): Observable<any> {
    return of(this.reimbursementClaim);
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
      description: 'Booking an appointment for an alternate medical opinion',
      icon: 'assets/claimsModuleImages/second-op.svg'
    },
    {
      title: 'Hospitalisation assistance',
      description: 'Sharing suitable options for hospitals and other cashless facilities',
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

  public blogArticles = [
    {
      title: 'Health Insurance Options for Low Income Individuals',
      description:
        'Health insurance options for low-income individuals include various government schemes and affordable plans. Coverage provides essential medical protection with specific eligibility criteria.',
      date: '2025-02-24',
    },
    {
      title: 'Guide to Individual vs Family Insurance Deductibles',
      description:
        'Individual and family deductibles differ in coverage scope and cost implications. Understanding these differences helps choose appropriate health insurance plans for personal or family needs.',
      date: '2025-02-24',
    },
    {
      title: 'Understanding Family Health Insurance Deductibles',
      description:
        'Comprehensive explanation of family health insurance deductibles covering terms conditions and practical considerations for policy selection and usage.',
      date: '2025-02-24',
    },
  ];

  public onGetBlogArticles() {
    return of(this.blogArticles);
  }

  // car product 
  public products = [
    {
      product: '3 Years - Private Car Liability Policy',
      code: '3001/A3',
      uin: 'IRDAN115RP0002V01201819'
    },
    {
      product: 'Private car liability policy',
      code: '3001/A',
      uin: 'IRDAN115RP0012V01200102'
    },
    {
      product: 'Private car package policy',
      code: '3001',
      uin: 'IRDAN115RP0017V01200102'
    },
    {
      product: 'Stand-alone own damage private car insurance policy',
      code: '3001/O',
      uin: 'IRDAN115RP0001V02201920'
    },
    {
      product: 'Bundled - Private Car Policy',
      code: '3001/1B3',
      uin: 'IRDAN115RP0021V02202122'
    }
  ];

  public onGetProducts() {
    return of(this.products);
  }

  public bikeProductsData = [
    {
      product: 'Two Wheeler Vehicle Package Policy (Tenure 1, 2 and 3 years)',
      code: '3005/P5',
      uin: 'IRDAN115RP0015V05201415'
    },
    {
      product: '5 Years - Two Wheeler Liability Policy',
      code: '3005/A5',
      uin: 'IRDAN115RP0003V01201819'
    },
    {
      product: 'Standalone third party long term two wheeler insurance policy	',
      code: '3005/A',
      uin: 'IRDAN115RP0016V01201415'
    },
    {
      product: 'Two wheeler vehicle liability policy',
      code: '3005/A',
      uin: 'IRDAN115RP0016V01200102'
    },
    {
      product: 'Stand-alone own damage two wheeler insurance policy	',
      code: '3005/O',
      uin: 'IRDAN115RP0002V02201920'
    },
    {
      product: 'Bundled two wheeler policy',
      code: '3005/1B5',
      uin: 'IRDAN115RP0019V01202122'
    }
  ]

  public onGetBikeProductsData() {
    return of(this.bikeProductsData);
  }

  // hospital list name 
  public allHospitals = [
    {
      name: '7 Orange Healthcare Organization Llp',
      address: 'Survey No: 2, Plot No 74, Pawana Nagar, Chinchwad, Near Fatechand Jain High School',
      phone: '02027355777,02067191777',
      pincode: '411033',
      city: 'Pune'
    },
    {
      name: "Aarya Hospital",
      address: "Moi-Nighoje Road, Nighoje Tal",
      phone: "09834974688, 09850961920",
      pincode: "410501",
      city: 'Pune'
    },
    {
      name: "Aaryaa Multispeciality Hospital",
      address: "Ambedkar Nagar, Kondhava",
      phone: "09975622923",
      pincode: "411048",
      city: 'Pune'
    },
    {
      name: "Aashirwad Hospital",
      address: "213/26, Ram Mandir Lane, Hingne Khurd, Sinhagad Road",
      phone: "09822333770, 02024350994, 02024351558",
      pincode: "411051",
      city: 'Pune'
    },
    {
      name: "Aastha Orthopaedic Pediatric And Multispecialty Hospital",
      address: "G. No. 1145, Onkar Complex, Near SBI Bank, Ghotawa De Phata, At. Po. Pirangut, Taluka Mulshi",
      phone: "08600999096",
      pincode: "412115",
      city: 'Pune'
    },
    {
      name: 'Aadhar Hospital Multispeciality & ICU',
      address: '1St Floor, City Space Building, Near Four Point Hotel, Nagar Road, Viman Nagar',
      phone: '08888173100,09970539191',
      pincode: '411014',
      city: 'Pune'
    },
    {
      name: 'Aakash Eye Clinic & Laser Center Pvt. Ltd.',
      address: 'Beside Rajgurunagar Bank, Old Pune Mumbai Highway, Dehuroad',
      phone: '07385159540',
      pincode: '412101',
      city: 'Pune'
    },
    {
      name: 'Aarush Ivf And Endoscopy Centre.',
      address: 'A Wing, Prathmesh Harmony, 1St Floor, Gautam Buddha Lane, Orlem Church, Malad West',
      phone: '09920840925',
      pincode: '400065',
      city: 'Mumbai'
    },
    {
      name: 'Aarush Hospital.',
      address: 'Ground Floor , Suruchi Apartment, Behind Rashmi Garden, Viva Jangid Complexi',
      phone: '07276903838',
      pincode: '400001',
      city: 'Mumbai'
    },
    {
      name: 'Aastha Hospital.',
      address: '65, Balasinor Society, Sv Road, Kandivali(West)',
      phone: '07400190800',
      pincode: '400067',
      city: 'Mumbai'
    },
    {
      name: 'Aastha Healthcare.',
      address: 'Mulund Colony, Off Lbs Marg, Mulund West',
      phone: '02225628262',
      pincode: '400082',
      city: 'Mumbai'
    },
    {
      name: 'Aakash Eye Clinic & Laser Center Pvt. Ltd.',
      address: 'Some address in Mumbai',
      phone: '0123456789',
      pincode: '400001',
      city: 'Mumbai'
    },
    {
      name: 'Aaradhya Healthcare Hospital.',
      address: 'Ground Floor & First Floor, Aarpee Chambers, Behind Times Sqaure, Opp Kanakia Sevens, Near Marol Metro Station, Andheri East',
      phone: '07342537222,07342534000',
      pincode: '400001',
      city: 'Mumbai'
    },
    {
      name: "Abhinav Eye Care And Laser Centre",
      address: "H No: 10-102-61/594, Om Vihar Colony, Medipally, Behind Apex Hospital, Boduppal",
      phone: "04027203580",
      pincode: "500098",
      city: 'Hyderabad'
    },
    {
      name: "Adavally Damodar Reddy Memorial Hospital",
      address: "H.No:9-2, Ramanthapur",
      phone: "04027038744, 09676454044",
      pincode: "500013",
      city: 'Hyderabad'
    },
    {
      name: "Aditya Hospitals",
      address: "4116, Tilak Nagar Road, Abids",
      phone: "04030414673, 04039, 111333",
      pincode: "500001",
      city: 'Hyderabad'
    },
    {
      name: "Aditya Hospitals",
      address: "H.No.13-138/1, NH-44, Main Road, Medchal",
      phone: "09030817553",
      pincode: "501401",
      city: 'Hyderabad'
    },
    {
      name: "Adr Hospital",
      address: "24-1121, Anand Bagh, X-Roads, Malkajgiri, Opp Brindavan Gardens",
      phone: "04027246394",
      pincode: "500047",
      city: 'Hyderabad'
    },
    {
      name: "Aig Hospitals",
      address: "Plot No 2/3/4/5, Survey No 136, 1, Mind Space Road.",
      phone: "04042444222",
      pincode: "500032",
      city: 'Hyderabad'
    },
    {
      name: "Adr Hospital",
      address: "24-1121, Anand Bagh, X-Roads, Malkajgiri, Opp Brindavan Gardens",
      phone: "09873103041",
      pincode: "500047",
      city: 'Hyderabad'
    },
    {
      name: "Aarogya Hastha Hospitals Private Limited",
      address: "No 2, Katha No 2816/2, Sy No 87, Kasavanhalli Main Road, Off Sarjapura Road",
      phone: "8066668877",
      pincode: "560035",
      city: 'Bengaluru'
    },
    {
      name: "Abhaya Hospital",
      address: "#17, Dr.M H Mari Gowda Road Opp.9Th Cross Bus Stop Wilson Garden",
      phone: "09038016740",
      pincode: "560027",
      city: 'Bengaluru'
    },
    {
      name: "Abhayahasta Multi Speciality Hospital",
      address: "347/247, 2Nd Cross, Kaggadasapura, C.V Raman Nagar",
      phone: "08884343311",
      pincode: "560093",
      city: 'Bengaluru'
    },
    {
      name: "Abhishek Nethradhama Eye Hospital",
      address: "#971/37, Mig, 15Th A Cross, A Sector, Khb High Rise Apartment Road, Yelahanka New Town",
      phone: "07795715203",
      pincode: "560064",
      city: 'Bengaluru'
    },
    {
      name: "Akash Hospital",
      address: "Near International Airport, Prasanna Halli Main Road, Devanahalli",
      phone: "07353172005,08951943424",
      pincode: "562110",
      city: 'Bengaluru'
    },
    {
      name: "Adhventha Hospital",
      address: "No 31, 45Th Cross, Sangam Circle, Opposite Metro Pillar No 16, Jayanagar 8Th Block",
      phone: "7829453576",
      pincode: "560070",
      city: 'Bengaluru'
    },
    {
      name: "Aakash Hospital",
      address: "90/43 Malviya Nagar, Delhi",
      phone: "01140501000, 09871090893",
      pincode: "110017",
      city: 'New Delhi'
    },
    {
      name: "Aalok Hospital",
      address: "Plot No-136, Kh No-103/14, Rajeev Nagar, Main Kanjha Road, Sec-38, Rohini",
      phone: "09310204289",
      pincode: "110086",
      city: 'New Delhi'
    },
    {
      name: "Aarna Eye Care Centre",
      address: "6, Inder Enclave, Metro Pillar Number -314, Main Rohtak Road",
      phone: "09625349752",
      pincode: "110087",
      city: 'New Delhi'
    },
    {
      name: "Aarogya Hospital",
      address: "32, Vikas Marg, Chitra Vihar",
      phone: "01122448008,09911886050",
      pincode: "110092",
      city: 'New Delhi'
    },
    {
      name: "Action Cancer Hospital",
      address: "Paschim Vihar",
      phone: "01149222222",
      pincode: "110063",
      city: 'New Delhi'
    },
    {
      name: "Accura Eye Care",
      address: "Gate No :- 1, S-347, 1St Floor, Panchsheel Park Metro station",
      phone: "1147084545",
      pincode: "110017",
      city: 'New Delhi'
    }
  ];
  
  public hospitalListName() {
    return of(this.allHospitals);
  }
}
