import { Component } from '@angular/core';
import { PostsFormEditComponent } from '../posts-form-edit/posts-form-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent {
  fields=[
    {nombre:'Imagen',tipo:0,placeholder:''},
    {nombre:'Título',tipo:1,placeholder:'Título'},
    {nombre:'Precios del producto',tipo:2,placeholder:'$'},
    {nombre:'Categoría',tipo:3,placeholder:'Categoría'},
    {nombre:'Ubicación ',tipo:3,placeholder:'Ubicación'},
    {nombre:'Descripción de producto',tipo:1,placeholder:'Descripción de producto'},
    {nombre:'Estado de producto',tipo:3,placeholder:'Estado de producto'},
    {nombre:'Dimensiones ',tipo:1,placeholder:'Dimensiones'},
    {nombre:'Estado de venta ',tipo:3,placeholder:'Estado de venta'},
    {nombre:'Precio referencial',tipo:2,placeholder:'$'},
  ]

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PostsFormEditComponent,{
      data: {
        fields:this.fields,
      }
    });
  }
}
