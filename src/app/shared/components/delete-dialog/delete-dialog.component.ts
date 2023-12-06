import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from 'src/app/models/productModel';
import { ProductsService } from 'src/app/services/productsservice/products.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,private product:ProductsService) {
    
  }

  post:ProductModel[]=this.data;
  
  close(): void {
    this.dialogRef.close();
  }

  eliminar(){
    for (const item in this.post) {
      this.product.deleteProduct(this.post[item]).subscribe(data=>{
      console.log(data)
    })
    }
    window.location.reload()
      this.close();
  }

}
