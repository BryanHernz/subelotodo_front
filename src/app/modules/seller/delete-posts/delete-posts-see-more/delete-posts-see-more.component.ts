import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-posts-see-more',
  templateUrl: './delete-posts-see-more.component.html',
  styleUrls: ['./delete-posts-see-more.component.css']
})
export class DeletePostsSeeMoreComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeletePostsSeeMoreComponent>, private dialog: MatDialog) {
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
