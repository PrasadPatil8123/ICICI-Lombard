import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css'],
  standalone:true,
  imports:[CommonModule, FormsModule]
})
export class Footer2Component {


public companies = [
    'ICICI Group',
    'ICICI Bank',
    'ICICI Prudential Life Insurance',
    'ICICI Prudential Mutual Fund',
    'ICICI Direct',
    'ICICI Lombard General Insurance',
    'ICICI Securities'
  ];



  selectedCompany = '';



}
