import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeleteDailogComponent } from './delete-dailog/delete-dailog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent {
  @Input() tableData: any;

  initialData: any[] = []; // Store the initial data from data.json

  newKpi: string = '';
  newSuccess: string = '';
  newWeightage: string = '';
  showNewRow: boolean = false;

  coe: string | undefined ;
  

  showDeleteSuccessMessage: boolean = false;

  kpiOptions: string[] = [
    "Interviews",
    "White Papers",
    "Tech Talks",
    "RFPs",
    "Case studies"
  ];

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.coe);
      this.fetchData('all');
  }

  fetchData(category: string) {
    this.http.get<any[]>('./assets/data.json').subscribe(data => {
      this.initialData = data; 
      this.tableData = [...this.initialData]; 
    });
  }

  addNewCriteria() {
    this.showNewRow = true;
    console.log('Add new criteria button clicked');
  }

  saveNewCriteria() {
    console.log('Save new criteria button clicked');
    const newData = {
      Kpi: this.newKpi,
      success: this.newSuccess,
      weightage: this.newWeightage
    };

    // Update the tableData array with the new criteria
    this.tableData.push(newData);

    // Optionally, save the updated data to localStorage
    localStorage.setItem('criteriaData', JSON.stringify(this.tableData));

    console.log('New criteria added:', newData);

    // Reset the form
    this.resetForm();
  }

  cancelAdd() {
    this.resetForm();
  }

  resetForm() {
    this.newKpi = '';
    this.newSuccess = '';
    this.newWeightage = '';
    this.showNewRow = false;
  }
  enableEditMode(element: any) {
    element.editMode = true;
    element.backup = { ...element }; 
    element.Kpi = element.Kpi;
}

saveEditedCriteria(element: any) {
    element.editMode = false;
}

cancelEdit(element: any) {
  element.editMode = false;
  element.Kpi = element.backup.Kpi;
  element.success = element.backup.success;
  element.weightage = element.backup.weightage;
}

openDeleteDialog(element: any): void {
  const dialogRef = this.dialog.open(DeleteDailogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.deleteCriteria(element);
    }
  });
}

deleteCriteria(element: any): void {
  const index = this.tableData.indexOf(element);
  if (index >= 0) {
    this.tableData.splice(index, 1);
    this.showDeleteSuccessMessage = true;
  }
}

openDeleteConfirmation(): void {
  const dialogRef = this.dialog.open(DeleteDailogComponent, {
    width: '300px',
    height: '160px',
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
      this.showDeleteSuccessMessage = true;
      setTimeout(() => {
        this.showDeleteSuccessMessage = false;
      }, 1000); 
    }
  });
}

calculateTotalWeightage() {
  let total = 0;
  for (const element of this.tableData) {
    total += +element.weightage; 
  }
  return total;
}

isTotalWeightageValid() {
  return this.calculateTotalWeightage() === 100;
}
}
