import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentsEditDataComponent } from '../payments-edit-data/payments-edit-data.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {

  constructor(private dialog: MatDialog) {}

  openEditDialog() {
    const dialogRef = this.dialog.open(PaymentsEditDataComponent);
  }  

}
