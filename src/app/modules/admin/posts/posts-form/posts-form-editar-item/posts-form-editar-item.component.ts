import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-posts-form-editar-item',
  templateUrl: './posts-form-editar-item.component.html',
  styleUrls: ['./posts-form-editar-item.component.css']
})
export class PostsFormEditarItemComponent {

  constructor(
    private dialogRef: MatDialogRef<PostsFormEditarItemComponent>) {
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
