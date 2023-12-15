import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts')
  }

  getAllProductsByCategoryId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`https://freeapi.miniprojectideas.com/api/amazon/GetCartProductsByCustomerId?id=${id}`)
  }

  getAllCategory(): Observable<any[]> {
    return this.http.get<any[]>('https://freeapi.miniprojectideas.com/api/amazon/GetAllCategory')
  }

  registerCustomer(customer: any): Observable<any>{
    return this.http.post("https://freeapi.miniprojectideas.com/api/amazon/RegisterCustomer", customer)
  }

  loginCustomer(customerCredentials: any): Observable<any>{
    return this.http.post("https://freeapi.miniprojectideas.com/api/amazon/Login", customerCredentials)
  }
}
