import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-scorer',
  templateUrl: './top-scorer.component.html',
  styleUrls: ['./top-scorer.component.css']
})
export class TopScorerComponent {
  tableData: any[] = [];
  activeCategory: string  = 'all';
 
  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
    this.fetchData(this.activeCategory);
  }
 
  fetchData(category: string): void {
    this.http.get<any>('./assets/data.json').subscribe(data => {
      this.tableData = data[category] || [];
    });
  }
 
  handleFilterChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.activeCategory = selectedValue;
    this.fetchData(this.activeCategory);
  }

}
