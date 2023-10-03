import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditFrequentQuestionsComponent } from '../edit-frequent-questions/edit-frequent-questions.component';

@Component({
  selector: 'app-admin-frequent-questions',
  templateUrl: './admin-frequent-questions.component.html',
  styleUrls: ['./admin-frequent-questions.component.css']
})
export class AdminFrequentQuestionsComponent {
  secciones=[
    {nombre:'Administrar publicaciones',preguntas:['Publicaciones ','Modificación de publicación','Quitar publicaciones']},
    {nombre:'Todo relacionado a ventas',preguntas:['Ventas , cobros y envíos ','Vendedores','Cancelaciones de compra']},
    {nombre:'Pagos',preguntas:['Facturación  ','Pagos','Devolución de dinero']},
  ]

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditFrequentQuestionsComponent);
  }
}
