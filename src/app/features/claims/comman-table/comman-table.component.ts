import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthClaimsService } from '../shared/health-claims.service';
import { PartnerHospitalComponent } from './../partner-hospital/partner-hospital.component';

@Component({
  selector: 'app-comman-table',
  templateUrl: './comman-table.component.html',
  styleUrls: ['./comman-table.component.css']
})
export class CommanTableComponent {
  public listHospital: any = [];
  public tableDataList: any= [];
  public heading = ['Hospital Name', 'Phone', 'Pincode', 'City'];
  constructor(private actRoute: ActivatedRoute, private route: Router, private getService: HealthClaimsService) {
    console.log(this.actRoute.snapshot.params['addList']);
  }
  // ngOnInit() {
  //   this.actRoute.paramMap.subscribe(params => {
  //     this.listHospital = params.get('addList');
  //     console.log('Hospital Data from Route:', this.listHospital);
  //   });
  // }
  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      const rawData = params.get('addList');
      if (rawData != null) {
        try {
          this.listHospital = JSON.parse(rawData);
          console.log('Hospital Data from Route:', this.listHospital);
        } catch (err) {
          console.error('Invalid JSON string in route param:', rawData);
        }
      }
    });

    // this.actRoute.paramMap.subscribe(param =>{
    //   const tableData = param.get('addList');
    //   if(tableData){
    //     try{
    //       this.tableDataList = JSON.parse(tableData);
    //       console.log(this.tableDataList);          
    //     }catch(err){
    //         console.log(tableData); 
    //     }
    //   }
    // })
  }

  public backParentComponent() {
    this.listHospital = '';
    this.route.navigate(['claims/partner']);
  }

  // @ViewChild(PartnerHospitalComponent) list: any;
  public oldHospitalDataList: any = [];
  public oldHospitalData() {
    this.getService.hospitalListName().subscribe((res: any) => {
      this.oldHospitalDataList = res;
      console.log(this.oldHospitalDataList);

    })
  }
}

