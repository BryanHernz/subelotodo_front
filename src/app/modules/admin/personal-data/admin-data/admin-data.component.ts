import { Component, OnInit } from '@angular/core';
import { EditAdminDataComponent } from '../edit-admin-data/edit-admin-data.component';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent implements OnInit{

  constructor(private dialog: MatDialog,private userserv:UserService) {
  }
  email:string=localStorage.getItem('email')!
  user!: UserModel;

  openDialog() {
    const dialogRef = this.dialog.open(EditAdminDataComponent,{
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