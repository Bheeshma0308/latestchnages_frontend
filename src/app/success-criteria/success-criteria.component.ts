import { Component,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeleteDailogComponent } from '../delete-dailog/delete-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success-criteria',
  templateUrl: './success-criteria.component.html',
  styleUrls: ['./success-criteria.component.css']
})
export class SuccessCriteriaComponent implements OnInit {
  tableData: any[] = [];
  initialData: any[] = []; 
  newKpi: string = '';
  newSuccess: string = '';
  newWeightage: string = '';
  showNewRow: boolean = false;
  coe: string | undefined ;
  showDeleteSuccessMessage: boolean = false;
 

  constructor(private http: HttpClient, public dialog: MatDialog,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.coe = params['coe'];
    });
    console.log(this.coe);
      this.fetchData('all');
  }

  fetchData(category: string) {
    this.http.get<any[]>('./assets/data.json').subscribe(data => {
      this.initialData = data; 
      this.tableData = [...this.initialData]; 
    });
  }

  navigateCoe(){
    this.router.navigate(['success-COE']);
  }
  

openDeleteDialog(element: any): void {
  console.log('Delete dialog opened for element:', element);
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
      }, 5000); 
    }
  });
}

}
