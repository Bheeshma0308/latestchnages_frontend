import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SelfReportPopUpComponent } from './self-report-pop-up/self-report-pop-up.component';
 
@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user_name :string = 'Harsil';
  user_level:string = 'Junior Software Engineer';
  user_sub_competency:string = 'OpenSource';
 
  constructor(private dialogRef : MatDialog){}
 
  openPopUp(){
    this.dialogRef.open(SelfReportPopUpComponent);
  }
}