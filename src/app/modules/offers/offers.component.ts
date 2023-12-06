import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/productModel';
import { ProductsService } from 'src/app/services/productsservice/products.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})

export class OffersComponent implements OnInit {
  productos:ProductModel[]=[];
  
  ruta:string='http://localhost:8000/'

  constructor(private productserv:ProductsService) {
    
  }

  ngOnInit():void{
      this.productserv.getProducts().subscribe(data=>{
        this.productos=data;
      })
    
  }

}
