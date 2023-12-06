import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartModel } from 'src/app/models/shoppingCartModel';
import { ShoppingCartService } from 'src/app/services/cartservice/shopping-cart.service';
import { ProductsService } from 'src/app/services/productsservice/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  
  ruta:string='http://localhost:8000/'

  productos:ShoppingCartModel[]=[];

  constructor(private route: ActivatedRoute,private productserv:ProductsService,private cartservice:ShoppingCartService){}


  ngOnInit(): void {
    const userId=parseInt(localStorage.getItem("userId")!)
    this.cartservice.getShoppingCartByUser(userId).subscribe(data=>{
      this.productos=data;
      console.log(data)
    })

  }

  deleteItem(index: ShoppingCartModel) {
    this.cartservice.deleteShoppingCartItem(index).subscribe(data=>{
      
      window.location.reload()
    })
  }

  tbkProcess(){
      
    }


  calcularTotal(): number {
    var total=0;
    for (const key in this.productos) {
      total+=this.productos.at(parseInt(key))?.product?.price!;
    }
    return total;
  }
}

