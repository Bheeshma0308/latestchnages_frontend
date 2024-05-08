import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Kpi } from './kpi';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  // private apiUrl = 'assets/kpi.json';
  private apiUrl = 'https://localhost:44385/api/KeyPerformanceIndex/GetAll';

  constructor(private http: HttpClient) { }
  
  // getData(): Observable<Kpi[]> {
  //   return this.http.get<Kpi[]>(this.apiUrl)
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
        .pipe(
        catchError(error => {
          console.error('Error fetching data:', error);
          throw throwError(error); 
        })
      );
  }

  saveData(kpis: Kpi[]): Observable<void> {
    return this.http.put<void>(this.apiUrl, kpis)
      .pipe(
        catchError(error => {
          console.error('Error saving KPI data:', error);
          return throwError(error); 
        })
      );
  }

  deleteKpi(index: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${index}`; // Construct the delete URL with item ID
    return this.http.delete<void>(deleteUrl)
      .pipe(
        catchError(error => {
          console.error('Error deleting KPI:', error);
          return throwError(error);
        })
      );
  }  
}
