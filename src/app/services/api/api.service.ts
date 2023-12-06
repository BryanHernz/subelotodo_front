import {Injectable } from '@angular/core';
import {LoginModel} from '../../models/loginModel'
import {ResponseModel} from '../../models/responseModel'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserModel } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  API_URI = environment.urlBase;

  constructor(
    private http:HttpClient, 
    ) 
  { 

  }

  loginByEmail(form:LoginModel):Observable<ResponseModel>{
    let direction=this.API_URI+'/login';
    return this.http.post<ResponseModel>(direction,form);
  }

  registerByEmail(form:UserModel):Observable<ResponseModel>{
    let direction=this.API_URI+'/users';
    return this.http.post<ResponseModel>(direction,form);
  }

  login() {
    this.isLoggedInSubject.next(true);
  }

  logout() {
    localStorage.clear();
    this.isLoggedInSubject.next(false);
  }

}
