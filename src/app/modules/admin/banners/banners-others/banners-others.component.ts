import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditBannerComponent } from 'src/app/shared/components/edit-banner/edit-banner.component';
import { UploadImageComponent } from 'src/app/shared/components/upload-image/upload-image.component';

@Component({
  selector: 'app-banners-others',
  templateUrl: './banners-others.component.html',
  styleUrls: ['./banners-others.component.css']
})
export class BannersOthersComponent {
  bannersOtros = [
    {cabecera:"Ofertas",titulo:"Bienvenidos Ofertas",texto:"Encuentra los mejores descuentos desde un 10% a un 90%"},
    {cabecera:"Como Vender",titulo:"Vende tus productos",texto:"Si quieres subir tu producto a la página, rellena el siguiente formulario y ¡Listo!"},
  ];

  constructor(private dialog: MatDialog) {
  }

  openDialog(banner:string) {
    const dialogRef = this.dialog.open(EditBannerComponent,{
      data: {
        titulo: 'Editar texto banner '+banner,
      }
    });
  }

  openImageDialog(banner:string) {
    const dialogRef = this.dialog.open(UploadImageComponent,{
      data: {
        titulo: 'Subir imagen banner '+banner,
        tituloAlerta: 'Guardado realizado',
        mensaje: 'Imagen banner ha sido editado exitosamente',
      }
    });
  }

}
