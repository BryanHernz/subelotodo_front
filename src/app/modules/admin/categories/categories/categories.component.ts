import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { Category } from 'src/app/shared/models/categories';
import { EditCategoriesComponent } from '../edit-categories/edit-categories.component';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { CategoryModel } from 'src/app/models/categoryModel';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel [] = [];

  constructor(private dialog: MatDialog,private categoryserv:CategoriesService) {
  }

  openEditDialog(categoria:CategoryModel) {
    const dialogRef = this.dialog.open(EditCategoriesComponent,{
      data: {
        categoria:categoria,
      }
    });
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data: {
        tipo:'',
        titulo: 'Eliminar categoría',
        mensaje:'Si eliminas la categoría no podrás verla en el panel ¿Estás seguro de eliminar la categoría?',
      }
    });
  }

  ngOnInit(): void {
    this.categoryserv.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddCategoryComponent);
  }
}
