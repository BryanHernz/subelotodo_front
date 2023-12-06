import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSellerDataComponent } from '../edit-seller-data/edit-seller-data.component';
import { UserService } from 'src/app/services/userservice/user.service';
import { UserModel } from 'src/app/models/userModel'

import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-data',
  templateUrl: './seller-data.component.html',
  styleUrls: ['./seller-data.component.css']
})
export class SellerDataComponent implements OnInit{

  constructor(private dialog: MatDialog,private userserv:UserService) {
  }
  email:string=localStorage.getItem('email')!
  user!: UserModel;

  openDialog() {
    const dialogRef = this.dialog.open(EditSellerDataComponent,{
      data: {
        user: this.user,
      }
    });
  }

  ngOnInit():void{
    this.userserv.getUserByEmail(this.email).subscribe(data=>{
      this.user=data;
      console.log(this.user)
    })
  }

}
