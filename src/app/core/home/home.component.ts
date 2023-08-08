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
      name: 'Telefono',
      country: 'Chile',
      date: '01-02-2023', // ???
      photo: this.photoURL,
      price: 500000,
      currency: 'CLP',
    },
    {
      id: 1,
      name: 'Telefono',
      country: 'Chile',
      date: '01-02-2023', // ???
      photo: this.photoURL,
      price: 500000,
      currency: 'CLP',
    },
    {
      id: 1,
      name: 'Telefono',
      country: 'Chile',
      date: '01-02-2023', // ???
      photo: this.photoURL,
      price: 500000,
      currency: 'CLP',
    },
    {
      id: 1,
      name: 'Telefono',
      country: 'Chile',
      date: '01-02-2023', // ???
      photo: this.photoURL,
      price: 500000,
      currency: 'CLP',
    },
    {
      id: 1,
      name: 'Telefono',
      country: 'Chile',
      date: '01-02-2023', // ???
      photo: this.photoURL,
      price: 500000,
      currency: 'CLP',
    },
  ];
  
}
