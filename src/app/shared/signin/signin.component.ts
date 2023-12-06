
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/models/responseModel';
import { ApiService } from 'src/app/services/api/api.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private api:ApiService, private router:Router,
    @Inject(MAT_DIALOG_DATA) private data: any,private dialog:MatDialog,
    private dialogRef: MatDialogRef<SigninComponent>) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  errorStatus:boolean=false;
  errorMsj:any;

  openDialog() {
    const dialogRefe = this.dialog.open(SignupComponent);
    
    this.close();
  }

  onLogin(form: any){
    this.api.loginByEmail(form).subscribe(data=>{
      console.log(data);
      let dataResponse:ResponseModel = data;
      if (dataResponse.status=='ok') {
        localStorage.setItem("userId",dataResponse.id)
        localStorage.setItem("token",dataResponse.token);
        localStorage.setItem("userType",dataResponse.type);
        localStorage.setItem("userName",dataResponse.name!);
        localStorage.setItem("userLastName",dataResponse.lastName!);
        localStorage.setItem("email",form.email);
        localStorage.setItem("shoppingCart",JSON.stringify([]));
        console.log(dataResponse.lastName)
        //this.router.navigate(['productos']);
        console.log('logueado');
        this.api.login();
        this.close();
        window.location.reload();
      } else {
        this.errorStatus=true;
        this.errorMsj=dataResponse.msg;
        console.log(dataResponse.msg);
      }
    }
    );
  }
}
