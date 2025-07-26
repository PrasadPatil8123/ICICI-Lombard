import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Policy } from '../services/user-view'   
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

 activeIndex = 0;
 policies: Policy[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Policy[]>('http://localhost:3000/policies')
      .subscribe(data => this.policies = data.filter(p => p.userId === 1));
  }

  getPoliciesByStatus(status: string): Policy[] {
    return this.policies.filter(p => p.status === status);
  }
}

