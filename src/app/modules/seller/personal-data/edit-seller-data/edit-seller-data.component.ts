import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-edit-seller-data',
  templateUrl: './edit-seller-data.component.html',
  styleUrls: ['./edit-seller-data.component.css']
})
export class EditSellerDataComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<EditSellerDataComponent>,private userservice:UserService) {
    
  }

  user:UserModel=this.data.user;

  datosUser: UserModel=this.user;
  editarUsuario=new FormGroup({
    firstName:new FormControl(this.datosUser.firstName),
    lastName:new FormControl(this.datosUser.lastName),
    document:new FormControl(this.datosUser.document),
    phone:new FormControl(this.datosUser.phone),
  })

  putForm(){
    this.userservice.putUser({
      'id':this.datosUser.id,
      'email':this.datosUser.email,
      'cityId':this.datosUser.cityId,
      'stateId':this.datosUser.stateId,
      'firstName':this.editarUsuario.value.firstName!,
      'lastName':this.editarUsuario.value.lastName!,
      'address':this.datosUser.address,
      'zipcode':this.datosUser.zipcode,
      'sales':0,
      'outstanding':0,
      'type':2,
      'phone':this.editarUsuario.value.phone!,
      'birthday':this.datosUser.birthday,
      'password':this.datosUser.password,
      'document':this.editarUsuario.value.document!,
    }).subscribe(data=>{console.log(data),
      window.location.reload()})
    this.close();
  }

  close(): void {
    this.dialogRef.close(true);
  }

}
