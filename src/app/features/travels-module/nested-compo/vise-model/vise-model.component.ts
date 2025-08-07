import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vise-model',
  templateUrl: './vise-model.component.html',
  styleUrls: ['./vise-model.component.css']
})
export class ViseModelComponent {
  @Input() message: string = '';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
