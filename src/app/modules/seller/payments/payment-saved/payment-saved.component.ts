import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-saved',
  templateUrl: './payment-saved.component.html',
  styleUrls: ['./payment-saved.component.css']
})
export class PaymentSavedComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PaymentSavedComponent>) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
