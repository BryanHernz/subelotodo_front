import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request-alert',
  templateUrl: './request-alert.component.html',
  styleUrls: ['./request-alert.component.css']
})
export class RequestAlertComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<RequestAlertComponent>) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
