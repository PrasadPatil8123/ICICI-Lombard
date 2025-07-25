import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-workmens-component',
  templateUrl: './workmens-component.component.html',
  styleUrls: ['./workmens-component.component.css']
})
export class WorkmensComponentComponent {
     public myform:any=[]
 public bule_img1:any='../../../../assets/sme-img/wc_banner_new.png'
 public marking:any='../../../../assets/sme-img/tick_marine.png'
 constructor( private fb : FormBuilder){
   this.myform=this.fb.group({
    mobail:[""],
    email:[""],
    company:[""],
    pincode:[""],
   })
 }
 onSubmit(){
  
 }


//  ===============

}
