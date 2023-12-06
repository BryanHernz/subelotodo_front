import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';
import { AddSubcategoryComponent } from '../add-subcategory/add-subcategory.component';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddCategoryComponent>,private categoryserv:CategoriesService) {}

  newcat=new FormGroup({
    name:new FormControl(''),
  })
  
  close(): void {
    this.dialogRef.close(true);
  }
  
  postSubcat():void{
    this.categoryserv.saveCategory({'name':this.newcat.value.name!,}).subscribe(data=>{console.log(data),window.location.reload()});
    this.close();
    this.openDialog()
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
