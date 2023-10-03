import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditBannerComponent } from 'src/app/shared/components/edit-banner/edit-banner.component';
import { UploadImageComponent } from 'src/app/shared/components/upload-image/upload-image.component';

@Component({
  selector: 'app-banners-home',
  templateUrl: './banners-home.component.html',
  styleUrls: ['./banners-home.component.css']
})

export class BannersHomeComponent {
  banners = [
    {titulo:"DIA DEL NIÑO ",texto:"Lo mejor en juguetería y tecnología"},
    {titulo:"NUEVOS PRODUCTOS",texto:"Lo mejor en nuevos productos"},
  ];

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditBannerComponent,{
      data: {
        titulo: 'Editar banner',
      }
    });
  }

  openImageDialog() {
    const dialogRef = this.dialog.open(UploadImageComponent,{
      data: {
        titulo: 'Subir imagen',
        tituloAlerta: 'Imagen subida',
        mensaje: 'La imagen se ha subido exitosamente ',
      }
    });
  }


}
