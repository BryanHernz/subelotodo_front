import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-posts-form-add-item',
  templateUrl: './posts-form-add-item.component.html',
  styleUrls: ['./posts-form-add-item.component.css']
})
export class PostsFormAddItemComponent {

  constructor(
    private dialogRef: MatDialogRef<PostsFormAddItemComponent>) {
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
