import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from "../environments/environment";
import { TokenModel } from "../Models/tokenModel.model";
import { RequestModel } from "../Models/requestModel.model";
import { Router } from "@angular/router";
import { EmployeeModel } from "../Models/EmpCareerUser.model";
const helper = new JwtHelperService();

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      Accept: "application/json",
    }),
  };
  private ApiUrl = environment.apiUrl;
  private role: string;
  public demo = new Subject();

  constructor(private http: HttpClient, private route: Router) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    // Check whether the token is expired and return
    // true or false

    if (token !== null && !helper.isTokenExpired(token)) {
      if (this.role === undefined) {
        const jWTtoken = helper.decodeToken(token);
        this.role = jWTtoken.role;
      }

      return true;
    } else {
      return false;
    }
  }

  public getSSOToken() {
    const url = environment.ssoUrl;
    return this.http.get<any>(url, {
      headers: new HttpHeaders({ Accept: "application/json" }),
      observe: "response",
    });
  }

  public getToken(email: string, password: string): Observable<any> {
    const url = this.ApiUrl + "Token/Login";

    return this.http.post<any>(url, {email, password}, {

      headers: new HttpHeaders({ Accept: 'application/json' }),

      observe: 'response'
    });
  }

  public getRole(): string {
    if (this.role === undefined) {
      const token = localStorage.getItem("token");
      if (token) {
        const jWTtoken = helper.decodeToken(token);
        this.role = jWTtoken.role;
      } else {
        this.route.navigate(["/login"]);
      }
    }
    return this.role;
  }

  public setLocalstorage(value: TokenModel, SSOtoken: string) {
    localStorage.clear();

    const jWTtoken = helper.decodeToken(value.accessToken);
    this.role = jWTtoken.role;
    localStorage.setItem("role", jWTtoken.role);
    localStorage.setItem("Id", jWTtoken.Id);
    localStorage.setItem("email", jWTtoken.email);
    localStorage.setItem("token", value.accessToken);
    if (SSOtoken) {
      localStorage.setItem('SSOtoken', SSOtoken)
    }
  }

  public getEmpCareerUserInfo(EmpId: Number):Observable<EmployeeModel>{
    return this.http.get<EmployeeModel>(`${this.Ecp_apiUrl}ECPUser/GetUserInfo?EmployeeId=${EmpId}`)
  }
}
