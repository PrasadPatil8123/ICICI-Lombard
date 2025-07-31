import { Component } from '@angular/core';

@Component({
  selector: 'app-main-compo',
  templateUrl: './main-compo.component.html',
  styleUrls: ['./main-compo.component.css']
})
export class MainCompoComponent {
activeComponent = 'marine';

  setActive(component: string) {
    this.activeComponent = component;
  }

}
