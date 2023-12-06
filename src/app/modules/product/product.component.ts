import { Component, OnInit } from '@angular/core';
import { Product } from "../../shared/models/product";
import { SwiperOptions } from 'swiper/types/swiper-options';
import { ProductCard } from 'src/app/shared/models/product-card';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { ProductModel } from 'src/app/models/productModel';
import { ShoppingCartService } from 'src/app/services/cartservice/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{

  id!: number;
  product!: ProductModel;

  constructor(private route: ActivatedRoute,private productserv:ProductsService,private cartservice:ShoppingCartService) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id")!);
      this.productserv.getProduct(this.id).subscribe(data=>{
        this.product=data;
      })
  }

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

  addToCart(){
    this.cartservice.postShoppingCartItem(
      {
        'productId':this.product.id!,
        'amount':1,
        'userId':parseInt(localStorage.getItem("userId")!),
      }
  ).subscribe();
  }

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
