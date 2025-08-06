import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-other-imp2',
  templateUrl: './other-imp2.component.html',
  styleUrls: ['./other-imp2.component.css']
})
export class OtherImp2Component {

  @Input() data: any;
  @Output() childData = new EventEmitter();
  
  public dataSend: string = "data from child component to parent component";

  public method() {
    this.childData.emit(this.dataSend);
  }

  constructor() {
    this.childDataMethod();
  }
  public childDataMethod() {
    return "This is child component method data !";
  }

}
