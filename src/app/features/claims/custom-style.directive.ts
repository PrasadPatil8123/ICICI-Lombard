import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private ele: ElementRef) {
    ele.nativeElement.style.background = '#c13911';
  }

}
