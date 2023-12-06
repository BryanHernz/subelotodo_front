import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/responseModel';
import { ShoppingCartModel } from 'src/app/models/shoppingCartModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  API_URI = environment.urlBase;

  constructor(private http: HttpClient) { }

  getShoppingCartItems(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shoppingCart';
    return this.http.get<ShoppingCartModel[]>(direction,{headers});
  }

  getShoppingCartItem(id: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shoppingCart/'+id;
    return this.http.get<ShoppingCartModel>(direction,{headers});
  }

  getShoppingCartByUser(userId: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shoppingCart/byUser/'+userId;
    return this.http.get<ShoppingCartModel[]>(direction,{headers});
  }

  putShoppingCartItem(form:ShoppingCartModel){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shoppingCart/'+form.id;
    return this.http.put(direction,form,{headers});
  }

  deleteShoppingCartItem(form:ShoppingCartModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shoppingCart/'+form.id;
    return this.http.delete<ResponseModel>(direction,{headers});
  }

  postShoppingCartItem(form:ShoppingCartModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shoppingCart/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }
}
