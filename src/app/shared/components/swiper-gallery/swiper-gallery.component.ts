import { Component } from '@angular/core';

@Component({
  selector: 'app-swiper-gallery',
  templateUrl: './swiper-gallery.component.html',
  styleUrls: ['./swiper-gallery.component.css']
})
export class SwiperGalleryComponent {
  imagenActual: string = "assets/images/imagenes-productos/fotografi╠üa 1 estufa de len╠âa.jpg";
  changeImage(image: string)
  {
    this.imagenActual=image     
  }
}
