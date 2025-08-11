import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthClaimsService {

  constructor(private http: HttpClient) { }

  public onGetData(): Observable<any> {
    return this.http.get('http://localhost:3000/reimbursementClaim');
  }

  public onGetAssistanceData() {
    return this.http.get('http://localhost:3000/assistanceItems');
  }

  public onGetConnectiOptions() {
    return this.http.get("http://localhost:3000/connectOptions");
  }

  public onGetBlogArticles() {
    return this.http.get("http://localhost:3000/blogArticles");
  }

  public hospitalListName() {
    return this.http.get('http://localhost:3000/allHospitals');
  }
  public onSendData(data: any) {
    return this.http.post('http://localhost:3000/allHospitals', data);
  }
  public onDeleteData(data: any) {
    return this.http.delete(`http://localhost:3000/allHospitals/${data}`);
  }
  public onUpdateData(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/allHospitals/${id}`, data);
  }
  //vehicleRaiseClaim
  public onSendVehicleRaiseClaimData(data: any) {
    return this.http.post('http://localhost:3000/vehicleRaiseClaim', data);
  }

  //vehicleInformation
  public onSendvehicleInformation(data: any) {
    return this.http.post('http://localhost:3000/vehicleInformation', data);
  }

  public onMergeMap(id: any): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  public switchMap(searchTerm: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`)
  }

  public currentMess = new BehaviorSubject("Testalue");
  public message = this.currentMess.asObservable();

  public onSentValueBS(data: any) {
    this.currentMess.next(data);
  }

  public onSendappMobileIntimateClaim(data: any) {
    return this.http.post('http://localhost:3000/appMobileIntimateClaim', data)
  }

  public onSendTrackClaim(data: any) {
    return this.http.post('http://localhost:3000/appMobileTrackClaim', data)
  }
  public onSendCorporateIntimateClaims(data: any) {
    return this.http.post('http://localhost:3000/CorporateIntimateClaims', data)
  }
  public onSendCorporateTrackClaims(data: any) {
    return this.http.post('http://localhost:3000/CorporateTrackClaims', data)
  }

  public onGetclaimMethodsData(){
    return this.http.get('http://localhost:3000/claimMethods');
  }

  //serviceDoorstep
  public onGetserviceDoorstepData(){
    return this.http.get('http://localhost:3000/serviceDoorstep');
  }
  //claimSteps
  public onGetclaimStepsData(){
    return this.http.get('http://localhost:3000/claimSteps');
  }
  public onGetclaimSteps2Data(){
    return this.http.get('http://localhost:3000/claimSteps2');
  }

  //faqs
  public onGetfaqsData(){
    return this.http.get('http://localhost:3000/faqs');
  }
}
