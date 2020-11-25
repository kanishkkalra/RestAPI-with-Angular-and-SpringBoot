import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from "./product";
import { Observable } from 'rxjs';

const myHeader={
  headers:new HttpHeaders({'Content-type':'application/json',
  'Access-Control-Allow-Origin':'*'
})
}

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  listproducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9191/products");
  }

  deleteProduct(id : number) : Observable<Product>{
    return this.http.delete<Product>("http://localhost:9191/delete/"+id,myHeader);
  }

  register(pro: Product) : Observable<Product>{
    return this.http.post<Product>("http://localhost:9191/addProduct",pro,myHeader);
  }

  update(pro: Product) : Observable<Product>{
    return this.http.put<Product>("http://localhost:9191/update",pro,myHeader);
  }

  getProductById(id:number) : Observable<Product>{
    return this.http.get<Product>("http://localhost:9191/productById/"+id);
  }
}
