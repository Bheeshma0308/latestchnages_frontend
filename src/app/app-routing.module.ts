import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KpisListComponent} from './kpis-list/kpis-list.component';
import {FirstPageAdminComponent} from './first-page-admin/first-page-admin.component';
import {AllTopAchieversComponent} from './all-top-achievers/all-top-achievers.component';
import {TopAchieversComponent} from './top-achievers/top-achievers.component';

const routes: Routes = [
  {path:'kpi-list',component:KpisListComponent},
  {path:'first-page-admin',component:FirstPageAdminComponent},
  {path:'top_performer', component: TopAchieversComponent},
  {path:'home', component: AllTopAchieversComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
