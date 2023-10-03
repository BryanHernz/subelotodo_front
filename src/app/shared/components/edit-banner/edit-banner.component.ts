import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditBannerComponent>) {
    
  }

  titulo:string=this.data.titulo;

  close(): void {
    this.dialogRef.close(true);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Guardado realizado',
        mensaje: 'Banner ha sido editado  exitosamente ',
        tipo:'confirmacion',
      }
    });
    this.close();
  }

  
}
