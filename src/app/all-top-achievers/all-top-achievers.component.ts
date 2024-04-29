import { Component } from '@angular/core';
import allTopAchieverData from '../allTopAchieverData.json';
import { Router } from '@angular/router';

interface Data{
  name: String;
  score: Number;
  level: String;
}

@Component({
  selector: 'app-all-top-achievers',
  templateUrl: './all-top-achievers.component.html',
  styleUrls: ['./all-top-achievers.component.css']
})
export class AllTopAchieversComponent {
  user_name :string = 'Harsil';
  user_level:string = 'Junior Software Engineer';
  user_sub_competency:string = 'OpenSource';

  sub_competencies: string[] = ['Java','BA','NodeJS','Angular','Microsoft'];
  kpis: string[] = ['Interviews','RPFs','White Papers','Case Studies','Tech Talks'];

  datas : Data[] = allTopAchieverData;

  displayedColumns: string[] = ['name', 'score', 'level'];
  dataSource = this.datas;

  startCompetencyIndex = 0;
  startKPIIndex = 0;

  isCompetencyVisible(index: number): boolean {
    return index >= this.startCompetencyIndex && index < this.startCompetencyIndex + 3;
  }

  nextCompetency(): void {
    if (this.startCompetencyIndex < this.datas.length - 3) {
      this.startCompetencyIndex++;
    }
  }

  isKPIVisible(index: number): boolean {
    return index >= this.startKPIIndex && index < this.startKPIIndex + 3;
  }

  nextKPI(): void {
    if (this.startKPIIndex < this.datas.length - 3) {
      this.startKPIIndex++;
    }
  }

  // previous(): void {
  //   if (this.startIndex > 0) {
  //     this.startIndex--;
  //   }
  // }

  constructor(private router:Router){}

  nextPage() {
    this.router.navigate(['/top_performer']);
  }
}
