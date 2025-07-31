import { Component, Input, ViewChild } from '@angular/core';
import { HealthClaimsService } from '../shared/health-claims.service';
import { combineLatest, concat, concatMap, debounceTime, from, mergeMap, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-other-imp',
  templateUrl: './other-imp.component.html',
  styleUrls: ['./other-imp.component.css']
})
export class OtherImpComponent {
  searchControl = new FormControl();
  users: any = [];
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

}
