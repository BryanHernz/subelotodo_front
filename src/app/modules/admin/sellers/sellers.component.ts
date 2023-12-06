import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  constructor(private userserv:UserService) {
    
  }

  sellers:UserModel[]=[];


  @ViewChild(MatTable) tabla1!: MatTable<UserModel>;

  displayedColumns: string[] = ['numero', 'cliente', 'telefono', 'mail', 'fecha' ,'vendidos','saldos'];

  ngOnInit():void{
    this.userserv.getSellers().subscribe(data=>{
      this.sellers=data;}
    )
  }

}