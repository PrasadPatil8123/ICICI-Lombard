import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent {
baseUrl = 'http://localhost:3000';
Object = Object; 
  // Data Sets
  submitform1: any[] = [];
  submitform2: any[] = [];
  policies2: any[] = [];
  groupHealth: any[] = [];
  formInfo: any[] = [];
  employees: any[] = [];

  // Editing
  editId: string | null = null;
  editObject: any = {};

  // Search Texts
  searchText1 = '';
  searchText2 = '';
  searchText3 = '';
  searchText4 = '';
  searchText5 = '';
  searchText6 = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.http.get<any[]>(`${this.baseUrl}/submitform1`).subscribe(d => this.submitform1 = d);
    this.http.get<any[]>(`${this.baseUrl}/submitform2`).subscribe(d => this.submitform2 = d);
    this.http.get<any[]>(`${this.baseUrl}/policies2`).subscribe(d => this.policies2 = d);
    this.http.get<any[]>(`${this.baseUrl}/group-health`).subscribe(d => this.groupHealth = d);
    this.http.get<any[]>(`${this.baseUrl}/form-info`).subscribe(d => this.formInfo = d);
    this.http.get<any[]>(`${this.baseUrl}/employees`).subscribe(d => this.employees = d);
  }

  startEdit(entry: any) {
    this.editId = entry.id;
    this.editObject = { ...entry };
  }

  cancelEdit() {
    this.editId = null;
    this.editObject = {};
  }

  saveEdit(endpoint: string) {
    if (!this.editId) return;
    this.http.put(`${this.baseUrl}/${endpoint}/${this.editId}`, this.editObject).subscribe(() => {
      this.cancelEdit();
      this.loadAll();
    });
  }

  deleteItem(endpoint: string, id: string) {
    if (confirm("Are you sure?")) {
      this.http.delete(`${this.baseUrl}/${endpoint}/${id}`).subscribe(() => this.loadAll());
    }
  }

  filtered(data: any[], searchText: string): any[] {
    return data.filter(item => JSON.stringify(item).toLowerCase().includes(searchText.toLowerCase()));
  }
}
