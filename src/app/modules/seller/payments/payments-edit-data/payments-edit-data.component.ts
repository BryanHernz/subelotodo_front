import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PaymentSavedComponent } from '../payment-saved/payment-saved.component';

@Component({
  selector: 'app-payments-edit-data',
  templateUrl: './payments-edit-data.component.html',
  styleUrls: ['./payments-edit-data.component.css']
})
export class PaymentsEditDataComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PaymentsEditDataComponent>,private dialog: MatDialog) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }


  openDialog() {
    this.close();
    const dialogRef = this.dialog.open(PaymentSavedComponent);
  }  
}
