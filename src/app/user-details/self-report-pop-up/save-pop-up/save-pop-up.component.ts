import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
 
@Component({
  selector: 'app-save-pop-up',
  templateUrl: './save-pop-up.component.html',
  styleUrls: ['./save-pop-up.component.css']
})
export class SavePopUpComponent {
  constructor(private dialogRef: MatDialog) {}
 
 
  onSave(){
    console.log("Form Submiited");
    this.dialogRef.closeAll();
  }
 
}