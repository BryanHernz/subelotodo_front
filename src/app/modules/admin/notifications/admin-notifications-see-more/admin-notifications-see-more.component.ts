import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-notifications-see-more',
  templateUrl: './admin-notifications-see-more.component.html',
  styleUrls: ['./admin-notifications-see-more.component.css']
})
export class AdminNotificationsSeeMoreComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AdminNotificationsSeeMoreComponent>, private dialog: MatDialog) {
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
