import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class  AdminDashboardComponent{
  user_name :string = 'Harsil';
  user_level:string = 'Junior Software Engineer';
  user_sub_competency:string = 'OpenSource';
 
  //constructor(private router: Router){}


  KpiData(){
   // this.router.navigate(['kpi-list']);
  }

}
