import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details1',
  templateUrl: './card-details1.component.html',
  styleUrls: ['./card-details1.component.css']
})
export class CardDetails1Component {

  constructor(private router: Router,private fb: FormBuilder,private http : HttpClient) {
    this.adviceForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      category: ['', Validators.required]
    });

    this.newsletterForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path])
  }

  backbutton =[
    {
      route: 'sme/workmen',  
    }
  ]
  articles = [
    {
      route: 'blogs/workplace-safety',  
      category: 'General Insurance By ICICI Lombard/Blogs / Online InsuranceWorkplace safety guide: Preventing slip, trip and fall incidents',
      title: 'Workplace safety guide: Preventing slip, trip and fall incidents',
      shortDescription: `Slips, trips, and falls are common workplace hazards that can lead to serious injuries and legal claims. 
                  This guide offers actionable tips for prevention and compliance with Indian safety laws.`,
      date: '09 Jun 2025',
      timeToRead: '3 min read',
      views: 58
    }
  ];
  tripAndFallCauses = [
    {
      heading: 'Common causes of trips',
      description: `Incidents involving tripping typically stem from:`,
      items: [
        'Obstructed views that prevent workers from seeing hazards',
        'Clutter in walkways and work areas',
        'Uncovered cables or wires across walkways',
        'Uneven walking surfaces and steps',
        'Wrinkled carpeting or uneven floor mats',
        'Missing or uneven floor tiles',
        'Poor lighting conditions that cause difficulty in seeing obstacles'
      ],
      footer: `The hazards of slips, trips and falls related to tripping are particularly common in busy offices and manufacturing facilities where cables, equipment and materials are prevalent.`
    },
    {
      heading: 'Common causes of falls',
      description: `Falls constitute the most serious category within slips, trips and falls hazards in the workplace and usually result from:`,
      items: [
        'Unprotected edges of elevated platforms',
        'Improper ladder usage and placement',
        'Unguarded floor openings and holes'
      ]
    },
    {
      heading: 'How to prevent slips, trips and falls?',
      description: `FPreventing slip-trip-fall hazard situations requires a multifaceted approach:`,
      items: [
        " Maintain good housekeeping practices and clean spills immediately",
        "Install anti-slip flooring in high-risk areas",
        "Use proper signage for wet floors or maintenance work",
        "Ensure optimal lighting across all work areas and walkways",
        "Keep walkways clear of obstacles and clutter",
        "Secure cables and wires away from walking paths",
        "Encourage employees to wear appropriate footwear",
        "Undertake periodic safety checks to determine potential hazards",
      ]
    }, {
      heading: 'Safety tips and best practices to avoid slips, trips and falls',
      description: `Here are some practical safety tips for both employers and employees`,
      items: [
        "Develop and implement a comprehensive safety program",
        "Conduct regular safety training sessions",
        "Encourage reporting of potential hazards",
        "Maintain proper documentation of all safety measures",
        "Ensure proper insurance coverage including workmen compensation insuranceFor employees",

        "Stay alert and pay attention to your surroundings",
        "Report hazards immediately to supervisors",
        "Use handrails when using stairs",
        "Take your time and avoid rushing, especially in high-risk areas",
        "Keep work areas clean and free of clutter",
        "Wear appropriate footwear for your working conditions",
      ]
    },
  ];


  
  adviceForm: FormGroup;
  newsletterForm: FormGroup;
  categories = ['Health Insurance', 'Life Insurance', 'Motor Insurance', 'Travel Insurance'];

    

  submitAdviceForm() {
    if (this.adviceForm.valid) {
      console.log('Advice Form Data:', this.adviceForm.value);
      // TODO: Send data to backend or show success message
      this.http.post("http://localhost:3000/submitform1",this.adviceForm.value).subscribe((res:any)=>{
        console.log(res)
        alert(" form sumited successfully")
      })
    }
  }

  submitNewsletterForm() {
    if (this.newsletterForm.valid) {
      console.log('Newsletter Form Data:', this.newsletterForm.value);
       this.http.post("http://localhost:3000/submitform2",this.newsletterForm.value).subscribe((res:any)=>{
        console.log(res)
        alert(" form sumited successfully")
       })
    }
  }
}






