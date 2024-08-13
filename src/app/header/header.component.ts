import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  cartCount = 0;
  cart: any[] = [];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('cart').subscribe((res: any) => {
      this.cart = res.cart;
      console.log("cart", this.cart);
      
      this.cartCount = this.cart.length;
    })
  }

}
