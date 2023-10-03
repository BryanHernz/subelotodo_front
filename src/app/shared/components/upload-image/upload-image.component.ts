import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<UploadImageComponent>) {
    
  }

  titulo:string=this.data.titulo;
  tituloAlerta:string=this.data.tituloAlerta;
  mensaje:string=this.data.mensaje;
  
  close(): void {
    this.dialogRef.close(true);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: this.tituloAlerta,
        mensaje: this.mensaje,
        tipo:'confirmacion',
      }
    });
    this.close();
  }

}
