import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ValidateComponent>) {
  }

  close(): void {
    this.dialogRef.close(true);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Validación realizada',
        mensaje: 'Haz validado la publicación:                               Manta de lycra, dos plazas, algodón 200 hilos María Carmen de la Manzana',
        tipo:'confirmacion',
      }
    });
    this.close();
  }

  openRejectDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Validación rechazada',
        mensaje: 'Haz rechazado la publicación:                                    Manta de lycra, dos plazas, algodón 200 hilos María Carmen de la Manzana                                       Producto no cumple con las normas de Súbelo todo, se enviará un mail a la persona con el rechazo de producto',
        tipo:'',
      }
    });
    this.close();
  }

}
