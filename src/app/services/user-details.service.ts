import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private apiUrl = environment.apiUrl + 'Employee/GetEmployee?empId=1';

  constructor(private http: HttpClient) { }

  getEmployeeDetails() {
    // const url =`${this.apiUrl}/getemployeedetails/${employeeId}`;
    const url =this.apiUrl;
    console.log("Running", UserDetailsComponent);
    return this.http.get<any>(url);
  }
}
