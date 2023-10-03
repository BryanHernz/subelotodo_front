import { Component } from '@angular/core';
import { EditAdminDataComponent } from '../edit-admin-data/edit-admin-data.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent {

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditAdminDataComponent);
  }

}
