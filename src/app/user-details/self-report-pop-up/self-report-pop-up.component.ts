import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelPopUpComponent } from './cancel-pop-up/cancel-pop-up.component';
import { SavePopUpComponent } from './save-pop-up/save-pop-up.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-self-report-pop-up',
  templateUrl: './self-report-pop-up.component.html',
  styleUrls: ['./self-report-pop-up.component.css'],
  providers: [DatePipe]
})
export class SelfReportPopUpComponent {

  currentDate: Date = new Date();

  self_category: string = '';
  self_date: Date;
  self_description: string = '';
  self_weightage: number = 30;

  constructor(private dialogRef: MatDialog, private datePipe: DatePipe) {
    this.self_date = new Date();
  }

  generateCategories: string[] = [
    'Interviews',
    'Tech Talks',
    'RPFs',
    'Case Studies'
  ];

  onCategoryChange(event: any) {
    this.self_category = event.target.value;
  }

  onDateChange(event: any) {
    console.log("Date changed:", event.target.value);
    this.self_date = new Date(event.target.value);
  }

  onDescriptionChange(event: any) {
    this.self_description = event.target.value;
  }

  onSaveClick() {
    this.dialogRef.open(SavePopUpComponent);
  }

  onCancelClick() {
    this.dialogRef.open(CancelPopUpComponent);
  }

  formatSelfDate(): string {
    return this.datePipe.transform(this.self_date, 'dd-MM-yyyy') || '';
  }

  showDatePicker: boolean = false;

  toggleDatePicker() {
    this.showDatePicker = !this.showDatePicker;
  }

  onDatePickerSelect(event: any) {
    this.showDatePicker = true;
  }
}
