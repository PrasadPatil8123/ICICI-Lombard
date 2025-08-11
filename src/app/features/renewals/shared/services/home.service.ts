import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  savePolicy(data:any){
    return this.http.post(`${this.baseUrl}/policy`,data)
  }

  saveMobile(data:any){
    return this.http.post(`${this.baseUrl}/mobile`,data)
  }

  saveBussinessPolicy(data:any){
    return this.http.post(`${this.baseUrl}/bussiness`,data)

  }

  getPolicyByPolicyNumber(policyNumber:string){
    return this.http.get(`${this.baseUrl}/renewalPolicies?policyNumber_like=${policyNumber}`)
  }

   getPolicyByPhoneNumber(phoneNumber:string){
    return this.http.get(`${this.baseUrl}/renewalPolicies?phoneNumber=${phoneNumber}`)
  }

   getPolicyByLoanAccountNumber(loanAccountNumber:string){
    return this.http.get(`${this.baseUrl}/renewalPolicies?loanAccountNumber=${loanAccountNumber}`)
  }
}
