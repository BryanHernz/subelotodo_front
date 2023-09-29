import { Component } from '@angular/core';
import { RejectedSalesSeeMoreComponent } from '../rejected-sales-see-more/rejected-sales-see-more.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rejected-sales',
  templateUrl: './rejected-sales.component.html',
  styleUrls: ['./rejected-sales.component.css']
})
export class RejectedSalesComponent {

  constructor(private dialog: MatDialog) {}

  rejecteds:number[] = [1,2,3,4,5] 

    
  openDialog() {
    const dialogRef = this.dialog.open(RejectedSalesSeeMoreComponent);
  }


}
