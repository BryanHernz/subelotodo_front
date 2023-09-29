import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-seller-data',
  templateUrl: './edit-seller-data.component.html',
  styleUrls: ['./edit-seller-data.component.css']
})
export class EditSellerDataComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<EditSellerDataComponent>) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }

}
