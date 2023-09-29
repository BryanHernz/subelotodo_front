import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-vertical-menu',
  templateUrl: './seller-vertical-menu.component.html',
  styleUrls: ['./seller-vertical-menu.component.css']
})
export class SellerVerticalMenuComponent {

  constructor(private router: Router ) { }

  ubicacion:string=this.router.url;

}
