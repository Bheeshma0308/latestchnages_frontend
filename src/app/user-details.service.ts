import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailsComponent } from './user-details/user-details.component';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private apiUrl = 'https://localhost:44337/api/Employee/GetEmployee?empId=1'

  constructor(private http: HttpClient) { }

  getEmployeeDetails() {
    // const url =`${this.apiUrl}/getemployeedetails/${employeeId}`;
    const url =this.apiUrl;
    console.log("Running", UserDetailsComponent);
    return this.http.get<any>(url,{headers: new HttpHeaders().set('UserEmail','abc') } );
  }
}
