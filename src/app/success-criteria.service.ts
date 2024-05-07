import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SuccessCriteriaService {
  getSuccessCriteria() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://localhost:44382/api/KPISuccessCriteria/SaveSuccessCriteria'; // Replace with your actual API URL
 
  constructor(private http: HttpClient) { }
 
  addSuccessCriteria(criteria: { Kpi: string; success: string; weightage: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, criteria, { headers });
  }
 
  updateSuccessCriteria(criteria: { id: number; Kpi: string; success: string; weightage: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/${criteria.id}`, criteria, { headers });
  }
 
  deleteSuccessCriteria(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
