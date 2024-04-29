import { Component } from '@angular/core';
import adminKPI from '../adminKPI.json';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

interface Data {
  name: string;      
  score: number;      
  sub_competency: string;  
  kpi: string;        
}

@Component({
  selector: 'app-top-achievers',
  templateUrl: './top-achievers.component.html',
  styleUrls: ['./top-achievers.component.css']
})
export class TopAchieversComponent {
  domains = new FormControl([]);
  kpis = new FormControl([]);

  domainList: string[] = ['All', 'Angular', 'Java', 'BA', 'React', 'Node JS', '.Net'];
  kpiList: string[] = ['All', 'Interviews', 'RFPs', 'White Papers', 'Case Studies', 'Tech Talks'];

  user_name: string = 'Harsil';  
  user_level: string = 'Junior Software Engineer';  
  user_sub_competency: string = 'OpenSource';  

  datas: Data[] = adminKPI;
  displayedColumns: string[] = ['name', 'score', 'sub_competency', 'kpi'];
  dataSource = this.datas;

  p: number = 1;

  constructor(private router: Router) {
    this.domains.valueChanges.subscribe(values => this.filterData());
    this.kpis.valueChanges.subscribe(values => this.filterData());
  }

  backHome() {
    this.router.navigate(['/home']);
  }

  private filterData() {
    const domainFilters: string[] = this.domains.value || [];
    const kpiFilters: string[] = this.kpis.value || [];

    this.dataSource = this.datas.filter(data => {
      const domainMatch = domainFilters.includes('All') || domainFilters.length === 0 || domainFilters.includes(data.sub_competency);
      const kpiMatch = kpiFilters.includes('All') || kpiFilters.length === 0 || kpiFilters.includes(data.kpi);
      
      return domainMatch && kpiMatch;
    });
}

}
