import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-admin-payments-edit-data',
  templateUrl: './admin-payments-edit-data.component.html',
  styleUrls: ['./admin-payments-edit-data.component.css']
})
export class AdminPaymentsEditDataComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AdminPaymentsEditDataComponent>,private dialog: MatDialog) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }


  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Guardado realizado',
        mensaje: 'Tus datos han sido editados exitosamente',
        tipo:'confirmacion',
      }
    });
    this.close();
  }
}
