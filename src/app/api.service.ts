import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getCategory() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getProductByCategory(category: string) {
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
  }
}

