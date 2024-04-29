import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KpisListComponent} from './kpis-list/kpis-list.component';
import {FirstPageAdminComponent} from './first-page-admin/first-page-admin.component';

const routes: Routes = [
  {path:'kpi-list',component:KpisListComponent},
  {path:'first-page-admin',component:FirstPageAdminComponent}
 //  {path: '',redirectTo: 'kpi-list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
