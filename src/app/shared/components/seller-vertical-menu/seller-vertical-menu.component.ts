import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-seller-vertical-menu',
  templateUrl: './seller-vertical-menu.component.html',
  styleUrls: ['./seller-vertical-menu.component.css']
})
export class SellerVerticalMenuComponent {

  constructor(private router: Router, private dialog: MatDialog) { }

  ubicacion:string=this.router.url;
  
  openDialog() {
    const dialogRef = this.dialog.open(LogoutComponent);
  }  

}
