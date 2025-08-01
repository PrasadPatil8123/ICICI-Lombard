import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthClaimsService } from '../shared/health-claims.service';
import { PartnerHospitalComponent } from './../partner-hospital/partner-hospital.component';
import { combineLatest, concat, concatMap, forkJoin, from, merge, mergeMap } from 'rxjs';
import { LoginService } from '../auth/login.service';

@Component({
  selector: 'app-comman-table',
  templateUrl: './comman-table.component.html',
  styleUrls: ['./comman-table.component.css']
})
export class CommanTableComponent {
  public listHospital: any = [];
  public tableDataList: any = [];
  public heading = ['Hospital Name', 'Phone', 'Pincode', 'City'];
  constructor(private actRoute: ActivatedRoute, private route: Router, private getService: HealthClaimsService, private loginService: LoginService) {
    console.log(this.actRoute.snapshot.params['addList']);

    this.loginService.onGetData().subscribe((res:any) =>{
      console.log(res);      
    })

    forkJoin({
      user: getService.hospitalListName(),
      post: loginService.onGetData()
    }).subscribe((res:any)=>{
      console.log(res);      
    })

    combineLatest([
      this.getService.hospitalListName(),
      this.loginService.onGetData()
    ]).subscribe(([user, post])=>{
      console.log('user: ', user);
      console.log('post: ', post);      
    })
    const users = [1,2,3,4,5,6];
      from(users).pipe(
        concatMap((id:any) => this.loginService.onGetDataSecond(id))
      ).subscribe((res:any)=>{
        console.log(res);        
      })
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
  public allHospitalData: any = [];


  public oldHospitalData() {
    this.getService.hospitalListName().subscribe((res: any) => {
      this.oldHospitalDataList = res;
      console.log(this.oldHospitalDataList);
    })
    this.allHospitalData = merge(this.oldHospitalDataList, this.listHospital);
    this.allHospitalData.subscribe((res: any) => {
      console.log(res);
    })
    // console.log(this.allHospitalData);
  }
}

