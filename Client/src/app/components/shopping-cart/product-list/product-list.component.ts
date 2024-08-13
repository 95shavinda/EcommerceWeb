import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from "./product-item/product-item.component";
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  productList : Product[] = [];

  constructor(private productServices : ProductService){}

  ngOnInit(): void {
    this.productServices.getProducts().subscribe(products =>{
      this.productList = products;
    });
  }
}
