import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CommonModule } from '@angular/common';
import { MessangerService } from '../../../services/messanger.service';
import { CartItems } from '../../../models/cart-item';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] // Fixed here
})
export class CartComponent implements OnInit {

  cartItems: CartItems[] = []; // Initialize the array

  cartItemTotal = 0

  constructor(private msg: MessangerService, private cartSevrice: CartService) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: unknown) => {
      this.loadCartItems();
    });
  }

  loadCartItems(){
    this.cartSevrice.getCartItems().subscribe((items: CartItems[]) =>{
      this.cartItems = items;
      this.calculateTotal();
    })
    this.calculateTotal();
  }

  calculateTotal() {
    this.cartItemTotal = 0; // Reset the total before calculation
    this.cartItems.forEach(item => {
      this.cartItemTotal += (item.price * item.qty);
    });
  }
}