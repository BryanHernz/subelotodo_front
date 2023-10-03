import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-notifications-mark-read',
  templateUrl: './admin-notifications-mark-read.component.html',
  styleUrls: ['./admin-notifications-mark-read.component.css']
})
export class AdminNotificationsMarkReadComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AdminNotificationsMarkReadComponent>) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
