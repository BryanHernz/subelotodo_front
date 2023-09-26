import { Component } from '@angular/core';
import { RequestAlertComponent } from '../request-alert/request-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent {
  constructor(private dialog: MatDialog,private location: Location) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RequestAlertComponent);
  }

  back(): void {
    this.location.back()
  }
}
