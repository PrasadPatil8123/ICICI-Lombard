import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarRegDataService {

  constructor(private http:HttpClient) {
  }
  GetVehicalData(){
    return this.http.get("http://localhost:3000/user");
  }

  SendVehicalData(data:any){
return this.http.post("http://localhost:3000/user",data);
  }
}
