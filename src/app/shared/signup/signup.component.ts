import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CityModel } from 'src/app/models/cityModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { StateModel } from 'src/app/models/stateModel';
import { ApiService } from 'src/app/services/api/api.service';
import { CityService } from 'src/app/services/cityservice/city.service';
import { StateService } from 'src/app/services/stateservice/state.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private api:ApiService, private router:Router,
    @Inject(MAT_DIALOG_DATA) private data: any, 
    private dialogRef: MatDialogRef<SignupComponent>, private stateserv:StateService,private citiesserv:CityService,) {
    
  }

  regiones:StateModel[]=[];
  comunas:CityModel[]=[];
  selectedreg:string='- REGIÓN -';
  selectedcom:string='- COMUNA -';

  close(): void {
    this.dialogRef.close(true);
  }

  registerForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    stateId : new FormControl('',Validators.required),
    cityId : new FormControl('',Validators.required),
    zipcode : new FormControl(''),
    phone : new FormControl('',Validators.required),
    birthday : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  errorStatus:boolean=false;
  errorMsj:any;

  ngOnInit():void{
    this.stateserv.getStates().subscribe(data=>{
      this.regiones=data;
    })
  }

  getCities():void{
    var nume=parseInt(this.selectedreg);
    this.citiesserv.getCitiesByState(nume).subscribe(data=>{
      this.comunas=data;
    })
  }

  onRegister(){
    if (this.registerForm.valid) {
      console.log(this.registerForm);
      this.api.registerByEmail({
        'email':this.registerForm.value.email!,
        'cityId':parseInt(this.registerForm.value.cityId!),
        'stateId':parseInt(this.registerForm.value.stateId!),
        'firstName':this.registerForm.value.firstName!,
        'lastName':this.registerForm.value.lastName!,
        'address':this.registerForm.value.address!,
        'zipcode':parseInt(this.registerForm.value.zipcode!)??null,
        'sales':0,
        'outstanding':0,
        'type':2,
        'phone':parseInt(this.registerForm.value.phone!),
        'birthday':new Date(this.registerForm.value.birthday!),
        'password':this.registerForm.value.password!,
      }).subscribe(data=>{
        console.log(data);
        let dataResponse:ResponseModel = data;
        if (dataResponse.status=='ok') {
          
        } else {
          this.errorStatus=true;
          this.errorMsj=dataResponse.msg;
          console.log(dataResponse.msg);
        }
      }
      );
    }else{
      this.errorStatus=true;
      this.errorMsj='Debe completar todos los campos';
    }
  }
}
