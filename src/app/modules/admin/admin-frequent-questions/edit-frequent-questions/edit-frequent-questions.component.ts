import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-frequent-questions',
  templateUrl: './edit-frequent-questions.component.html',
  styleUrls: ['./edit-frequent-questions.component.css']
})
export class EditFrequentQuestionsComponent {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditFrequentQuestionsComponent>) {
  }

  close(): void {
    this.dialogRef.close(true);
  }

  openAddDialog() {
    //const dialogRef = this.dialog.open(AddSubcategoryComponent);
  }
}
