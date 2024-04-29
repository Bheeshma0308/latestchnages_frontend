import { Component,Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Kpi } from '../kpi';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-kpi-dialog',
  templateUrl: './kpi-dialog.component.html',
  styleUrls: ['./kpi-dialog.component.css']
})
export class KpiDialogComponent implements OnInit{
  kpiForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<KpiDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Kpi
  ) { this.kpiForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(20)]],
    description: ['', [Validators.maxLength(200)]]
  });}

  ngOnInit(): void {
    
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    if (this.kpiForm.valid) {
      // Perform add operation (e.g., save KPI, show success message)
      this.dialogRef.close();
      alert('KPI added successfully');
    }
  }

  onSubmit(): void {
    // For handling form submission (optional)
  }

   onSave(): void {
     this.dialogRef.close(this.data);
   }
  // onSave(): void {
  //   if (this.kpiForm.valid) {
  //     const newKpi: Kpi = {
  //       name: this.kpiForm.value.name,
  //       description: this.kpiForm.value.description
  //     };

  //     this.dialogRef.close(newKpi); // Close dialog and pass new KPI data
  //   }
  // }

}
