import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { DeletePostsSeeMoreComponent } from '../delete-posts-see-more/delete-posts-see-more.component';

@Component({
  selector: 'app-delete-posts',
  templateUrl: './delete-posts.component.html',
  styleUrls: ['./delete-posts.component.css']
})
export class DeletePostsComponent {
  
  posts:number[] = [1,2,3,4,5] 

  constructor(private dialog: MatDialog) {}

    
  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeletePostComponent);
  }  


  openSeeMoreDialog() {
    const dialogRef = this.dialog.open(DeletePostsSeeMoreComponent);
  }


}
