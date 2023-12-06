import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { ProductModel } from 'src/app/models/productModel';


@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SeeMoreComponent>, private dialog: MatDialog) {
  }

  post:ProductModel=this.data;

  ruta:string='http://localhost:8000/'
  
  close(): void {
    this.dialogRef.close(true);
  }

  ngOnInit(){}

  openDialog(item:ProductModel) {
    const dialogRef = this.dialog.open(EditPostComponent,{height:'100%',autoFocus:false,panelClass: 'borderless-dialog',data:item});
  }
}
