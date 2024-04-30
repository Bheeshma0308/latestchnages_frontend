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
 
    //  if (!emailCheck) {
     
    //   return;
    //  }
 
    //  if (!passwordCheck) {
    // //   alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    //   return;
     
    //  }
    if (this.loginData.email === 'admin@innova.in' && this.loginData.password === 'Admin@123') {
      alert('Login Successful');
      console.log('Login Form Data:', this.loginData);
      //this.router.navigate(['employee-dashboard']);
    } else {
      this.loginError = 'Invalid Username or Password.';
    }
   // this.router.navigate(['employee-dashboard']);
   
  }
 
}