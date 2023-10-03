import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sales-register-see-more',
  templateUrl: './sales-register-see-more.component.html',
  styleUrls: ['./sales-register-see-more.component.css']
})
export class SalesRegisterSeeMoreComponent {
  constructor(
    private dialogRef: MatDialogRef<SalesRegisterSeeMoreComponent>) {
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
