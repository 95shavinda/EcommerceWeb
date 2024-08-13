import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from "./filters/filters.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [FiltersComponent, ProductListComponent, CartComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
      
    }
}
