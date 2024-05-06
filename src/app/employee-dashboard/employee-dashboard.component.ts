import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {
  @Input()
  role: string;

  constructor(private location: Location) {
    this.role = (this.location.getState() as {role: string}).role;
  }
}
