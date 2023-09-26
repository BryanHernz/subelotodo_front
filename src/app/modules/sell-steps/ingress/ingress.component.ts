import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ingress',
  templateUrl: './ingress.component.html',
  styleUrls: ['./ingress.component.css']
})
export class IngressComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<IngressComponent>) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }

}
