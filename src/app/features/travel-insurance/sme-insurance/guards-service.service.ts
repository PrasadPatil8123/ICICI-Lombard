import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardsServiceService {

  constructor(private http :HttpClient) { 

  }

  public userRole={
    name:"nilesh",
    lname:'ghule',
    role:"client-health-ins"
  }

    
  curentRole(role:string):boolean{
    return role===this.userRole.role
  }

}
