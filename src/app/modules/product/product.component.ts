import { Component } from '@angular/core';
import { Product } from "../../shared/models/product";
import { SwiperOptions } from 'swiper/types/swiper-options';
import { ProductCard } from 'src/app/shared/models/product-card';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  public config: SwiperOptions = {
    slidesPerView:3,
    spaceBetween: 25,
    navigation: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: true,
      draggable: true
    }
  }
  
  myValue= 0;

  product: Product = 
    {
      id: 1,
      title: 'Estufa a leña Neoflam grande',
      description: "Tiene 20 años, uso ocasional. Se realizó limpieza en cañón anual hasta 2021. Actualmente desinstalada. Incluye cañones para casa de 2 pisos, base acero Inox cuadrada para proteger el piso. Sirve para cualquier espacio del hogar.",
      subCategories: [],
      tag: 'Hogar', // ???
      location: 'R.Metropolitana, Gran Santiago, San Bernardo',
      condition: 'Usado-Como nuevo',
      price: 300000,
      referencePrice:1000000,
      dimensions:'Medidas: 50 ancho, 63 fondo y 78 cm alto',
      weight:'100 kilos',
      seller:'María Carmen de la Manzana',
      sellerContact:'+56912345678',
      photosUrl: 
      [
        {
          id:1,
          path:'assets/images/imagenes-productos/fotografi╠üa 1 estufa de len╠âa.jpg',
        },
        {
          id:2,
          path:'assets/images/imagenes-productos/fotografi╠üa 2 estufa de len╠âa.jpg',
        },
        {
          id:3,
          path:'assets/images/imagenes-productos/fotografi╠üa 3 estufa de len╠âa.jpg',
        },
        {
          id:4,
          path:'assets/images/imagenes-productos/fotografi╠üa 4 estufa de len╠âa.jpg',
        },
        {
          id:5,
          path:'assets/images/imagenes-productos/scantek-380-estufa-a-lena-amesti (1).jpg',
        },
        {
          id:6,
          path:'assets/images/imagenes-productos/scantek-380-estufa-a-lena-amesti.jpg',
        }
      ],
  };

  productsCards: ProductCard [] = [
    {
      id: 1,
      name: 'Hamaca de flores rojas familiar XL',
      country: '',
      date: '', // ???
      photo: 'assets/images/imagenes-productos/computador imagen.jpg',
      price: 45000,
      currency: 'CLP',
    },
    {
      id: 2,
      name: 'Hamaca de flores rojas familiar XL',
      country: '',
      date: '', // ???
      photo: 'assets/images/imagenes-productos/iphone imagen.jpg',
      price: 45000,
      currency: 'CLP',
    },
    {
      id: 3,
      name: 'Hamaca de flores rojas familiar XL',
      country: '',
      date: '', // ???
      photo: 'assets/images/imagenes-productos/patines imagen.jpg',
      price: 45000,
      currency: 'CLP',
    },
  ];
}
