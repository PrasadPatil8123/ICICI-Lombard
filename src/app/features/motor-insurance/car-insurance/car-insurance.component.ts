import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarRegDataService } from 'src/app/core/services/car-reg-data.service';

@Component({
  selector: 'app-car-insurance',
  templateUrl: './car-insurance.component.html',
  styleUrls: ['./car-insurance.component.css']
})
export class CarInsuranceComponent {

public VehicleRegForm:any;
public vehicleform:any=[];
  constructor(private fb: FormBuilder, private client:CarRegDataService){
    this.getData();
this.VehicleRegForm=this.fb.group({
  regnum:[''],
  mobile_no:[''],
  email_id:[''],
})

}
getData(){
  this.client.GetVehicalData().subscribe((res:any)=>{
    console.log(res);
    

  });
}
senddata() {
  this.client.SendVehicalData(this.VehicleRegForm.value).subscribe((res: any) => {
    console.log('Submitted:', res);
  });
};
}

