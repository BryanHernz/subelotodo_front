import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/userservice/user.service';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-edit-admin-data',
  templateUrl: './edit-admin-data.component.html',
  styleUrls: ['./edit-admin-data.component.css']
})
export class EditAdminDataComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditAdminDataComponent>,private userservice:UserService) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }

  user:UserModel=this.data.user;

  datosUser: UserModel=this.user;
  editarAdmin=new FormGroup({
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
      'firstName':this.editarAdmin.value.firstName!,
      'lastName':this.editarAdmin.value.lastName!,
      'address':this.datosUser.address,
      'zipcode':this.datosUser.zipcode,
      'sales':0,
      'outstanding':0,
      'type':1,
      'phone':this.editarAdmin.value.phone!,
      'birthday':this.datosUser.birthday,
      'password':this.datosUser.password,
      'document':this.editarAdmin.value.document!,
    }).subscribe(data=>{
      this.openDialog()
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Guardado realizado',
        mensaje: 'Los datos de administración han sido editados exitosamente',
        tipo:'confirmacion',
      }
    });
    this.close();
  }
}
