import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Kpi } from '../Models/kpi.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private apiUrl = environment.apiUrl + 'KeyPerformanceIndex/GetKpiAll';

  constructor(private http: HttpClient) { }
  
  getKPIListData(): Observable<Kpi[]> {
    return this.http.get<Kpi[]>(this.apiUrl);
  }

  saveData(kpis: Kpi[]): Observable<void> {
    return this.http.put<void>(this.apiUrl, kpis)
      .pipe(
        catchError(error => {
          console.error('Error saving KPI data:', error);
          return throwError(error); // Propagate error to caller
        })
      );
  }

  deleteKpi(id: string): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${id}`; // Construct the delete URL with item ID
    return this.http.delete<void>(deleteUrl)
      .pipe(
        catchError(error => {
          console.error('Error deleting KPI:', error);
          return throwError(error);
        })
      );
  }  
}
