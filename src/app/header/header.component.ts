import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  cartCount = this.store.select('cartCount')
  cart: any[] = [];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('cart').subscribe((res: any) => {
      this.cart = res.cart;

      console.log("header cart", this.cart);
      
    })
  }

}
