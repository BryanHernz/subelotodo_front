import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notifications-mark-read',
  templateUrl: './notifications-mark-read.component.html',
  styleUrls: ['./notifications-mark-read.component.css']
})
export class NotificationsMarkReadComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NotificationsMarkReadComponent>) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
