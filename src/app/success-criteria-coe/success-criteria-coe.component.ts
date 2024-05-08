import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-criteria-coe',
  templateUrl: './success-criteria-coe.component.html',
  styleUrls: ['./success-criteria-coe.component.css']
})
export class SuccessCriteriaCoeComponent {
  router: Router = inject(Router);
  searchTerm: string = '';
  coes: string[] = ['Java', 'Angular', '.NET', 'Node Js', 'BA', 'React'];
  filteredCOEs: string[] = [];
  suggestions: string[] = [];
  showSuggestions: boolean = false;
  selectedCOE: string = '';
  selectedCOEIndex: number = -1;
  showMainContainer: boolean = true; 

  constructor() {}

  ngOnInit() {
    this.filteredCOEs = this.coes;
  }

  navigateSuccess(coe: any) {
    this.router.navigate(['success-criteria', { coe: coe }]);
  }

  
  filterCOEs() {
    if (this.searchTerm.trim() === '') {
        this.filteredCOEs = this.coes;
        this.showSuggestions = false;
        this.selectedCOE = '';
        this.showMainContainer = true;
    } else {
        this.filteredCOEs = this.coes.filter(coe =>
            coe.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.showSuggestions = true;
        if (this.filteredCOEs.length > 0) {
            this.selectedCOE = this.filteredCOEs[0];
        } else {
            this.selectedCOE = '';
        }
        this.showMainContainer = false; 
    }
    this.selectedCOEIndex = -1;
}

  clearSearch() {
    this.searchTerm = '';
    this.filteredCOEs = this.coes;
    this.showSuggestions = false;
    this.selectedCOE = '';
    this.selectedCOEIndex = -1;
    this.showMainContainer = true; 
  }

  onSuggestionClick(index: number) {
    this.searchTerm = this.filteredCOEs[index];
    this.showSuggestions = false;
    this.showMainContainer = false; 
}
}
