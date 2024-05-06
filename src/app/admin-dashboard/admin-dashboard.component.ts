import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  @Input()
  role: string;

  constructor(private location: Location) {
    this.role = (this.location.getState() as {role: string}).role;
  }
}
