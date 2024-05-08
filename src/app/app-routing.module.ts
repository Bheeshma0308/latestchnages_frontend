import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KpisListComponent} from './kpis-list/kpis-list.component';
import {AllTopAchieversComponent} from './all-top-achievers/all-top-achievers.component';
import {TopAchieversComponent} from './top-achievers/top-achievers.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuccessCriteriaCoeComponent } from './success-criteria-coe/success-criteria-coe.component';
import { SuccessCriteriaComponent } from './success-criteria/success-criteria.component';

const routes: Routes = [
  {path:'kpi-list',component:KpisListComponent},
  {path:'top_performer', component: TopAchieversComponent},
  {path:'home', component: AllTopAchieversComponent},
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'employee-dashboard', component: EmployeeDashboardComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'login', component: LoginPageComponent},
  { path:'success-criteria',component:SuccessCriteriaComponent },
  { path:'success-COE',component:SuccessCriteriaCoeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
