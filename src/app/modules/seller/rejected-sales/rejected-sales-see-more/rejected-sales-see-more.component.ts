import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rejected-sales-see-more',
  templateUrl: './rejected-sales-see-more.component.html',
  styleUrls: ['./rejected-sales-see-more.component.css']
})
export class RejectedSalesSeeMoreComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<RejectedSalesSeeMoreComponent>, private dialog: MatDialog) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }

}
