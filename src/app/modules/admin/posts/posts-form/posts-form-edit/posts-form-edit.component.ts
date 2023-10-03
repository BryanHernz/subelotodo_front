import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostsFormAddItemComponent } from '../posts-form-add-item/posts-form-add-item.component';
import { PostsFormEditarItemComponent } from '../posts-form-editar-item/posts-form-editar-item.component';

@Component({
  selector: 'app-posts-form-edit',
  templateUrl: './posts-form-edit.component.html',
  styleUrls: ['./posts-form-edit.component.css']
})
export class PostsFormEditComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PostsFormEditComponent>) {
  }

  fields=this.data.fields;

  close(): void {
    this.dialogRef.close(true);
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(PostsFormAddItemComponent);
  }

  openEditItemDialog() {
    const dialogRef = this.dialog.open(PostsFormEditarItemComponent);
  }
}
