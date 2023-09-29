import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompletedSalesSeeMoreComponent } from '../completed-sales-see-more/completed-sales-see-more.component';

@Component({
  selector: 'app-completed-sales',
  templateUrl: './completed-sales.component.html',
  styleUrls: ['./completed-sales.component.css']
})
export class CompletedSalesComponent {

  constructor(private dialog: MatDialog) {}

    
  openDialog() {
    const dialogRef = this.dialog.open(CompletedSalesSeeMoreComponent);
  }


}
