import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddSubcategoryComponent>,private categoryserv:CategoriesService) {}

  categoria:CategoryModel=this.data.categoria;

  newsubcat=new FormGroup({
    name:new FormControl(''),
    categoryId:new FormControl(this.categoria.id),
  })
  
  close(): void {
    this.dialogRef.close(true);
  }
  

  postSubcat():void{
    this.categoryserv.saveSubcategory({'name':this.newsubcat.value.name!,'categoryId':this.newsubcat.value.categoryId!}).subscribe(data=>{console.log(data),window.location.reload()});
    this.close()
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
}
