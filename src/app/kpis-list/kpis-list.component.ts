import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KpiDialogComponent } from '../kpi-dialog/kpi-dialog.component';
import { Router } from '@angular/router';
import { KpiService } from '../kpi.service';
import { Kpi } from '../kpi';
import { DeleteDailogComponent } from '../delete-dailog/delete-dailog.component';



@Component({
  selector: 'app-kpis-list',
  templateUrl: './kpis-list.component.html',
  styleUrls: ['./kpis-list.component.css']
   
})
export class KpisListComponent {
  
  
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

  constructor(private router: Router,private KpiService: KpiService,public dialog:MatDialog) { }
  
// Handle dialog close event if needed
  ngOnInit(): void {
    this.loadData();
    
  }
  
  loadData(): void {
    this.KpiService.getData().subscribe(data => {
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
      height: '405px',
      data: {} as Kpi // Initialize an empty Kpi object
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filteredData.push(result);
        //this.saveDataAndUpdateMessage('KPI added successfully');
        this.showAddSuccessMessage = true;
        this.showDeleteSuccessMessage=false;
        this.showUpdateSuccessMessage=false; 
      }
    });
  }

  openDeleteConfirmation(index:number): void {
    const dialogRef = this.dialog.open(DeleteDailogComponent, {
      width: '300px',
      height:'160px', // Set dialog width as desired
      data: {} as Kpi// You can pass data to the dialog if needed
      
    });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === true) {
  //       // User clicked Delete
  //       this.deleteItem(); 

  //       this.showDeleteSuccessMessage = true;
        
        
  //       // Call your deleteItem function here
  //     } else {
  //       // User clicked Cancel or closed the dialog
  //       // Handle accordingly (e.g., do nothing)
  //     }
  //   });
  // }
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
    // Set editing flag to true for the selected item
    this.tableData[index].editing = true;
   

  }

  
  saveEdit(index: number): void {
    // Set editing flag to false for the selected item
    this.tableData[index].editing = false;
    this.showUpdateSuccessMessage = true;
    this.showAddSuccessMessage=false;
    this.showDeleteSuccessMessage=false;
    
    this.KpiService.saveData(this.tableData)
      .subscribe(() => {
        console.log('Data saved successfully');
        this.showUpdateSuccessMessage = true;
        // Show update confirmation message
        alert('Updated successfully');
      });
  }


  cancelEdit(index: number): void {
    // Reset the editing state of the item at the specified index
    this.filteredData[index].editing = false;
    this.showUpdateSuccessMessage = false;
  }

  deleteItem(index: number): void {
    
    if (index >= 0 && index < this.filteredData.length) {
      const itemToDelete = this.filteredData[index];
  
      // Implement your delete logic here (e.g., delete from backend, update UI)
      // For demonstration, let's remove the item locally from arrays
      const itemIndexInTableData = this.tableData.findIndex(item => item === itemToDelete);
      if (itemIndexInTableData !== -1) {
        // Remove item from tableData array
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
      this.filteredData = [...this.tableData]; // Reset to show all data
      this.showResultsMessage = false;
      this.noResultsFound = false;
    } else {
      const searchTermLC = this.searchTerm.toLowerCase();
      this.filteredData = this.tableData.filter(item =>
        item.name.toLowerCase().includes(searchTermLC));
  
      if (this.filteredData.length > 0) {
        this.showResultsMessage = true;
        this.noResultsFound = false;
      } else {
        this.showResultsMessage = false;
        this.noResultsFound = true;
      }
      const suggestions = this.tableData
      .filter(item => item.name.toLowerCase().startsWith(searchTermLC))
      .map(item => item.name);

    this.updateSuggestions(suggestions);
    }
    
  }
  updateSuggestions(suggestions: string[]): void {
    this.searchSuggestions = suggestions;
  }
  selectSuggestion(suggestion: string): void {
    this.searchTerm = suggestion;
    this.filterData();
  }

  adminPage(){
    this.router.navigate(['first-page-admin']);
  }

}
