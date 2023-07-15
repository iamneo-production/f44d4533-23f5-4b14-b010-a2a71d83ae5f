import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseURL = "http://localhost:8080/api/v1/products";

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseURL}`);
  }

  createProduct(product: Product): Observable<Object>{
    return this.http.post(`${this.baseURL}`, product);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
