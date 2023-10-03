import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminPaymentsEditDataComponent } from '../admin-payments-edit-data/admin-payments-edit-data.component';

@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html',
  styleUrls: ['./admin-payments.component.css']
})
export class AdminPaymentsComponent {

  constructor(private dialog: MatDialog) {}

  openEditDialog() {
    const dialogRef = this.dialog.open(AdminPaymentsEditDataComponent);
  }  

}
