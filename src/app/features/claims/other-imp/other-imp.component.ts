import { Component, Input, ViewChild, ViewChildren } from '@angular/core';
import { HealthClaimsService } from '../shared/health-claims.service';
import { combineLatest, concat, concatMap, debounceTime, from, mergeMap, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { OtherImp2Component } from '../other-imp2/other-imp2.component';
@Component({
  selector: 'app-other-imp',
  templateUrl: './other-imp.component.html',
  styleUrls: ['./other-imp.component.css']
})
export class OtherImpComponent {
  searchControl = new FormControl();
  users: any = [];
  public data: any = "data from parent component to child component";

  @ViewChild(OtherImp2Component) childComponentData: any;
  @ViewChildren(OtherImp2Component) childViewChildren: any;
  constructor(private getService: HealthClaimsService) {
    getService.message.subscribe((res: any) => {
      console.log(res);
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((searchTerm: any) =>
          getService.switchMap(searchTerm)
        )
      )
      .subscribe(data => {
        this.users = data;
      });


    const id = sessionStorage.getItem('id');
    console.log(id);

    const user = from([1, 2, 3, 4]);
    from(user).pipe(
      mergeMap((id: any) => getService.onMergeMap(id))
    ).subscribe((res: any) => {
      console.log(res);
    })

    combineLatest([
      getService.onGetData(),
      getService.onGetAssistanceData()
    ]).subscribe(([user, post]) => {
      console.log(user);
      console.log(post);
    })
    const users = from([1, 2, 3, 4]);
    from(users).pipe(
      concatMap((id: any) => getService.onMergeMap(id))
    ).subscribe((res: any) => {
      console.log(res);
    })
  }
  public onSentData() {
    this.getService.onSendData(this.searchControl);
  }

  public childData: any = '';
  public childData2: any = '';
  public receiveData(even: any) {
    this.childData = even;
  }

  public onGetViewChildMethod() {
    console.log(this.childComponentData.childDataMethod());
    console.log(this.childComponentData.dataSend);
 
  }
  ngAfterViewInit() {
    this.childViewChildren.forEach((ele: any) => {
      console.log(this.childComponentData.childDataMethod());
      console.log(this.childComponentData.dataSend);
    });
  }
}
