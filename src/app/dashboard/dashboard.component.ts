import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input()
  role: string;

  constructor(private location: Location) {
    this.role = (this.location.getState() as {role: string}).role;
  }
}
