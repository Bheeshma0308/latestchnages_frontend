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
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { KpiDialogComponent } from './kpi-dialog/kpi-dialog.component';
import { DeleteDailogComponent } from './delete-dailog/delete-dailog.component';
import { FooterComponent } from './footer/footer.component';
import { FirstPageAdminComponent } from './first-page-admin/first-page-admin.component';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
