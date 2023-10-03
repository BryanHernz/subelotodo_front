import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-edit-admin-data',
  templateUrl: './edit-admin-data.component.html',
  styleUrls: ['./edit-admin-data.component.css']
})
export class EditAdminDataComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditAdminDataComponent>) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Guardado realizado',
        mensaje: 'Los datos de administración han sido editados exitosamente',
        tipo:'confirmacion',
      }
    });
    this.close();
  }
}
