import { Component } from '@angular/core';

@Component({
  selector: 'app-marine-insurance',
  templateUrl: './marine-insurance.component.html',
  styleUrls: ['./marine-insurance.component.css']
})
export class MarineInsuranceComponent {
buyers = [
    ['Exporters', 'Importers'],
    ['Manufacturers', 'Traders'],
    ['Logistics operators', 'Merchant exporters'],
    ['C&F agents', '']
  ];
}
