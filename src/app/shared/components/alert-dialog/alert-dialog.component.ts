import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertDialogComponent>) {
    
  }

  tipo:string=this.data.tipo;
  titulo:string=this.data.titulo;
  mensaje:string=this.data.mensaje;
  
  close(): void {
    this.dialogRef.close(true);
    window.location.reload()
  }
}
