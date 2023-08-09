import { Component } from '@angular/core';
import { ProductCard } from "../models/product-card";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private photoURL = '../../../assets/images/product-1.png';

  productsCard: ProductCard [] = [
    {
      id: 1,
      name: 'Lavadora-secadora MLSF-13510SC01',
      country: 'Chile',
      date: '13 de noviembre 2023', // ???
      photo: '../../../assets/images/imagenes-productos/Rectangle 7.png',
      price: 220000,
      currency: 'CLP',
    },
    {
      id: 2,
      name: 'Patines Profesionales Adulto Rojo',
      country: 'Chile',
      date: '13 de diciembre 2023', // ???
      photo: '../../../assets/images/imagenes-productos/patines imagen.jpg',
      price: 90000,
      currency: 'CLP',
    },
    {
      id: 3,
      name: 'Estufa a leña Neoflam grande',
      country: 'Chile',
      date: '21 de julio 2023', // ???
      photo: '../../../assets/images/imagenes-productos/Rectangle 7 (1).png',
      price: 300000,
      currency: 'CLP',
    },
    {
      id: 4,
      name: 'Computadora Acer Aspire Vero Laptop',
      country: 'Chile',
      date: '11 de agosto 2023', // ???
      photo: '../../../assets/images/imagenes-productos/computador imagen.jpg',
      price: 500000,
      currency: 'CLP',
    },
    {
      id: 5,
      name: 'Televisor Plasma UHD',
      country: 'Chile',
      date: '8 de septiembre 2023', // ???
      photo: '../../../assets/images/imagenes-productos/TV imagen.jpg',
      price: 250000,
      currency: 'CLP',
    },
  ];

  productsDiscountCard: ProductCard[] = [
    {
      id: 1,
      name: 'Computadora Acer Aspire Vero Laptop',
      country: 'Chile',
      date: '11 de agosto 2023', // ???
      photo: '../../../assets/images/imagenes-productos/computador imagen.jpg',
      price: 500000,
      currency: 'CLP',
    },
    {
      id: 2,
      name: 'Televisor Plasma UHD',
      country: 'Chile',
      date: '8 de septiembre 2023', // ???
      photo: '../../../assets/images/imagenes-productos/TV imagen.jpg',
      price: 250000,
      currency: 'CLP',
    },
    {
      id: 3,
      name: 'Zapatillas Nike AirForce 1 White',
      country: 'Chile',
      date: '18 de septiembre 2023', // ???
      photo: '../../../assets/images/imagenes-productos/nikes.jpg',
      price: 135000,
      currency: 'CLP',
    },
    {
      id: 4,
      name: 'Lavadora-secadora MLSF-13510SC01',
      country: 'Chile',
      date: '13 de noviembre 2023', // ???
      photo: '../../../assets/images/imagenes-productos/labadora imagen.png',
      price: 220000,
      currency: 'CLP',
    },
    {
      id: 5,
      name: 'Iphone SE Gray/Granite 128Gb',
      country: 'Chile',
      date: '11 de septiembre 2023', // ???
      photo: '../../../assets/images/imagenes-productos/iphone imagen.jpg',
      price: 600000,
      currency: 'CLP',
    },
    {
      id: 6,
      name: 'Patines Profesionales Adulto Rojo',
      country: 'Chile',
      date: '13 de diciembre 2023', // ???
      photo: '../../../assets/images/imagenes-productos/patines imagen.jpg',
      price: 90000,
      currency: 'CLP',
    },


  ]
  
}
