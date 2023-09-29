import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSellerDataComponent } from '../edit-seller-data/edit-seller-data.component';

@Component({
  selector: 'app-seller-data',
  templateUrl: './seller-data.component.html',
  styleUrls: ['./seller-data.component.css']
})
export class SellerDataComponent {

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditSellerDataComponent);
  }

}
