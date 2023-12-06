import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ResponseModel } from 'src/app/models/responseModel';
import { UserModel } from 'src/app/models/userModel';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = environment.urlBase;

  constructor(private http: HttpClient) { }

  getUserByEmail(email:String):Observable<UserModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/users/byEmail/'+email;
    return this.http.get<UserModel>(direction,{headers});
  }

  getSellers():Observable<UserModel[]>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/users/sellers/';
    return this.http.get<UserModel[]>(direction,{headers});
  }

  putUser(form:UserModel){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/users/'+form.id;
    return this.http.put(direction,form,{headers});
  }

}
