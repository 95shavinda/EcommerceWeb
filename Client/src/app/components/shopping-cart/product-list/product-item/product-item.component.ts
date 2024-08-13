import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { MessangerService } from '../../../../services/messanger.service';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{

  @Input() productItem! : Product

  constructor(private msg: MessangerService, private cartService: CartService) {}

  ngOnInit(): void {
    
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() =>{
      this.msg.sendMsg(this.productItem);
    })
  }

}
