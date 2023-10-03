import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';
import { AddSubcategoryComponent } from '../add-subcategory/add-subcategory.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddCategoryComponent>) {
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

  openAddDialog() {
    const dialogRef = this.dialog.open(AddSubcategoryComponent);
  }
}
