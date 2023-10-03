import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/shared/models/categories';
import { AddSubcategoryComponent } from '../add-subcategory/add-subcategory.component';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditCategoriesComponent>) {
  }

  categoria:Category=this.data.categoria;



  close(): void {
    this.dialogRef.close(true);
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddSubcategoryComponent);
    console.log(this.categoria.subCategories);
  }
}
