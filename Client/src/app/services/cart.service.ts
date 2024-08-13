import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CartItems } from '../models/cart-item';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

const cartUrl = "http://localhost:3000/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

  getCartItems() : Observable<CartItems[]>{
    return this.http.get<CartItems[]>(cartUrl).pipe(
      map((result : any[]) =>{
        let cartItems : CartItems[] = [];

        for(let item of result){
          let productExsist = false;

          for(let i in cartItems){
            if(cartItems[i].productId == item.product.id){
              cartItems[i].qty++;
              productExsist = true;
              break;
            }
          }
  
          if(!productExsist){
              cartItems.push(new CartItems(item.id,item.product));
          }
        }
        return cartItems;
      })
    );
  }

  addProductToCart(product : Product) : Observable<any>{
    return this.http.post(cartUrl,{ product });
  }
}
