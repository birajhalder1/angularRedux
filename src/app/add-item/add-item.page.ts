import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../store/cart.action';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  @Input() item: any;
  constructor(private store: Store) { }

  ngOnInit() {
  }

  addCart(){
    this.store.dispatch(addToCart(this.item));
  }

  removeCart(){
    this.store.dispatch(removeFromCart());
  }
}
