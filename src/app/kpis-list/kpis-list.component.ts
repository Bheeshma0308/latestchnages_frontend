import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KpiDialogComponent } from '../kpi-dialog/kpi-dialog.component';
import { Router } from '@angular/router';
import { KpiService } from '../services/kpi.service';
import { Kpi } from '../Models/kpi.model';
import { DeleteDailogComponent } from '../delete-dailog/delete-dailog.component';
import { Location } from '@angular/common';



@Component({
  selector: 'app-kpis-list',
  templateUrl: './kpis-list.component.html',
  styleUrls: ['./kpis-list.component.css']
   
})
export class KpisListComponent {
  
  @Input()
  role: string;
  tableData: Kpi[] = [];
  showDeleteSuccessMessage = false;
  showAddSuccessMessage = false;
  showUpdateSuccessMessage = false;
  editingItemId: number | null = null;
   filteredData: Kpi[] = [];
   searchTerm:string = '';
   searchSuggestions: string[] = [];
   showResultsMessage: boolean = false;
  noResultsFound: boolean = false;
  suggestionClicked: boolean = false;

  

  constructor(private router: Router,private KpiService: KpiService,public dialog:MatDialog, private location: Location) {
    this.role = (this.location.getState() as {role: string}).role;
  }
  

  ngOnInit(): void {
    this.loadData();
    
  }
  
  loadData(): void {
    this.KpiService.getKPIListData().subscribe(data => {
      this.tableData = data;
      this.filterData();
    });
    
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(KpiDialogComponent, {
  //     width: '710px',
  //     height:'405px',
  //     data: {} as Kpi // Initialize an empty Kpi object
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.tableData.push(result); // Add new KPI to tableData
  //       this.KpiService.saveData(this.tableData).subscribe(() => {
  //         //console.log('Data saved successfully');
  //         this.showAddSuccessMessage = true; 
  //       });
  //     }
  //   });
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(KpiDialogComponent, {
      width: '710px',
      height: '420px',
      data: {} as Kpi 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filteredData.push(result);
        
        this.showAddSuccessMessage = true;
        this.showDeleteSuccessMessage=false;
        this.showUpdateSuccessMessage=false; 
      }
    });
  }

  openDeleteConfirmation(index:number): void {
    const dialogRef = this.dialog.open(DeleteDailogComponent, {
      width: '300px',
      height:'200px', 
      data: {} as Kpi
      
    });

  
  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
      this.deleteItem(index)
    
      // this.showDeleteSuccessMessage = true;
      // this.showAddSuccessMessage=false;
      // this.showUpdateSuccessMessage=false; 
      // Display update success message
        // setTimeout(() => {
        //   this.showDeleteSuccessMessage = false; // Hide message after a certain time
        // }, 6000); // Adjust timeout as needed
      
    }
  });
}


  editItem(index: number): void {
    
    this.tableData[index].editing = true;
   

  }

  
  saveEdit(index: number): void {
    
    this.tableData[index].editing = false;
    this.showUpdateSuccessMessage = true;
    this.showAddSuccessMessage=false;
    this.showDeleteSuccessMessage=false;
    
    this.KpiService.saveData(this.tableData)
      .subscribe(() => {
        console.log('Data saved successfully');
        this.showUpdateSuccessMessage = true;
        
        alert('Updated successfully');
      });
  }


  cancelEdit(index: number): void {
    
    this.filteredData[index].editing = false;
    this.showUpdateSuccessMessage = false;
  }

  deleteItem(index: number): void {
    
    if (index >= 0 && index < this.filteredData.length) {
      const itemToDelete = this.filteredData[index];
  
      const itemIndexInTableData = this.tableData.findIndex(item => item === itemToDelete);
      if (itemIndexInTableData !== -1) {
        this.tableData.splice(itemIndexInTableData, 1);
      }
  
      this.filteredData.splice(index, 1);
  
      this.showDeleteSuccessMessage = true;
      this.showAddSuccessMessage = false;
      this.showUpdateSuccessMessage = false;
    } else {
      console.error('Invalid index provided for delete operation.');
    }
  }
  
  filterData(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredData = [...this.tableData];
      this.showResultsMessage = false;
      this.noResultsFound = false;
      this.searchSuggestions = [];
      this.resetSearch();
    } else {
     
      const searchTermLC = this.searchTerm.toLowerCase();
      const suggestions = this.tableData
        .filter(item => item.name.toLowerCase().startsWith(searchTermLC))
        .map(item => item.name);
      this.updateSuggestions(suggestions);
      if (this.searchSuggestions.length > 0) {
        this.showResultsMessage = true;
        this.noResultsFound = false;
    } else {
        this.showResultsMessage = false;
        this.noResultsFound = true;
    }
    }
}
 
updateSuggestions(suggestions: string[]): void {
    this.searchSuggestions = suggestions;
}
 
selectSuggestion(suggestion: string): void {
    this.searchTerm = suggestion;
    const searchTermLC = this.searchTerm.toLowerCase();
    this.filteredData = this.tableData.filter(item =>
        item.name.toLowerCase().includes(searchTermLC)
       
    );
    this.searchTerm = '';
    this.suggestionClicked = true;
   
   
}
resetSearch(): void {
  this.searchTerm = '';
  this.searchSuggestions = [];
  this.suggestionClicked = false;
}
 
 
 
   adminPage(){
      this.router.navigate(['admin-dashboard']);
   }

}
