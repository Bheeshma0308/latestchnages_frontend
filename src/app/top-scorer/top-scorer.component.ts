import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-scorer',
  templateUrl: './top-scorer.component.html',
  styleUrls: ['./top-scorer.component.css']
})
export class TopScorerComponent {
  tableData:any[]=[];
  activeCategory: string | null = null;
  activeButton: string | null = null;
  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
       this.fetchData('all');
  }
 
  fetchData(category: string) {
    this.activeCategory = category;
    this.http.get<any>(`./assets/data.json`).subscribe(data => {
     this.tableData = data[category];
     
    });
   
  }

}
