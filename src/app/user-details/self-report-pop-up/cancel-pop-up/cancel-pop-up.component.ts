import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
 
@Component({
  selector: 'app-cancel-pop-up',
  templateUrl: './cancel-pop-up.component.html',
  styleUrls: ['./cancel-pop-up.component.css']
})
export class CancelPopUpComponent {
  constructor(private dialogRef: MatDialog) {}
 
  onCloseAll(): void{
    this.dialogRef.closeAll();
  }
 
}