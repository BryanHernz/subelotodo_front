import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IngressComponent } from '../ingress/ingress.component';

@Component({
  selector: 'app-how-to-sale',
  templateUrl: './how-to-sale.component.html',
  styleUrls: ['./how-to-sale.component.css']
})
export class HowToSaleComponent {
  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(IngressComponent);
  }
}
