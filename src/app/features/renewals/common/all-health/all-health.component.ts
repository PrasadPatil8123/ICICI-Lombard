import { Component, Input } from '@angular/core';
import { SharedDataService } from '../../shared/services/shared-data.service';

@Component({
  selector: 'app-all-health',
  templateUrl: './all-health.component.html',
  styleUrls: ['./all-health.component.css']
})
export class AllHealthComponent {
  @Input() title!: string
  @Input() benefits!: { url: string; text: string }[]

  // right side data

  @Input() options: any[] = []

  selectedOption = 'policy';
  enteredValue = '';
  placeholder = 'ICICI Lombard Policy Number*';
  inputType = 'text';
  text = "You can get your existing policy number through your policy document"

  onOptionChange(event: Event) {
    const selectedElement = event.target as HTMLSelectElement;
    const value = selectedElement.value;

    this.selectedOption = value;


    if (value === 'policy') {
      this.placeholder = 'ICICI Lombard Policy Number *';
      this.inputType = 'text';
      this.text = "You can get your existing policy number through your policy document"

    } else if (value === 'phone') {
      this.placeholder = 'Phone Number *';
      this.inputType = 'text';
      this.text = "10 digit registered mobile number"

    } else if (value === 'loan') {
      this.placeholder = 'Loan Account Number *';
      this.inputType = 'text';
      this.text = "Loan account number is printed on loan document / statement"
    }
  }

  proceed() {
    console.log('Selected option:', this.selectedOption);
    console.log('Entered value:', this.enteredValue);
  }
}





