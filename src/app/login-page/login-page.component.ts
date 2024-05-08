import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginData = {
    email: '',
    password: ''
  };
  loginError:string='';
  constructor(private router: Router) { }
 
  onSubmit() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;
    const emailCheck = emailPattern.test(this.loginData.email);
 
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordCheck = passwordPattern.test(this.loginData.password);
    if (this.loginData.email === 'admin@innova.in' && this.loginData.password === 'Admin@123') {
      this.router.navigate(['admin-dashboard'], {state: {role: 'Admin'}});
    } else if(this.loginData.email==='employee@innova.in'&& this.loginData.password === 'Employee@123') {
         this.router.navigate(['employee-dashboard'], {state: {role: 'Admin'}});
       }
       else{
        this.loginError = 'Invalid Username or Password.';
       }
    }   
  } 
