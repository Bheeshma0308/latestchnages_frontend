import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { KpisListComponent } from './kpis-list/kpis-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { KpiDialogComponent } from './kpi-dialog/kpi-dialog.component';
import { DeleteDailogComponent } from './delete-dailog/delete-dailog.component';
import { FooterComponent } from './footer/footer.component';
import { FirstPageAdminComponent } from './first-page-admin/first-page-admin.component';
import { TopAchieversComponent } from './top-achievers/top-achievers.component';
import { AllTopAchieversComponent } from './all-top-achievers/all-top-achievers.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    KpisListComponent,
    HeaderComponent,
    KpiDialogComponent,
    DeleteDailogComponent,
    FooterComponent,
    FirstPageAdminComponent,
    TopAchieversComponent,
    AllTopAchieversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
