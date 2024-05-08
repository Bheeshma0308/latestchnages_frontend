import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SelfReportPopUpComponent } from './self-report-pop-up/self-report-pop-up.component';
import { Router } from '@angular/router';
import { userdetails } from './userdetails';
import { UserDetailsService } from '../services/user-details.service';
 
@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  
  user_name :string = 'Harsil';
  user_level:string = 'Junior Software Engineer';
  user_sub_competency:string = 'OpenSource';
  

  @Input()
  role: string | undefined;
 
  constructor(private dialogRef : MatDialog,
    private router: Router, private userdetails:UserDetailsService  ){
      this.userDetails()
    }
 
  openPopUp(){
    this.dialogRef.open(SelfReportPopUpComponent);
  }

  openKPIPage() {
    this.router.navigate(['kpi-list'])
  }

  userDetails() {
   this.userdetails.getEmployeeDetails().subscribe((data)=>{
    console.log(data);
   })
  }

}