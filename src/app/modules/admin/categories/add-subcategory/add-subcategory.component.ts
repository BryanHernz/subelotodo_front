import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddSubcategoryComponent>) {
  }

  close(): void {
    this.dialogRef.close(true);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Cambios realizados',
        mensaje: 'Se han guardado los cambios realizados en categoría',
        tipo:'confirmacion',
      }
    });
    this.close();
  }
}
