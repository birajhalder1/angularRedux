import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../store/cart.action';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage implements OnInit {
  // @Input() item: any;
  arrFruits: any = [];
  constructor(private store: Store<any>, private service: ApiServiceService) { }
  ngOnInit() {
    this.getFruitData();
  }
  getFruitData(){
    this.service.getFruits().subscribe((res: any)=> {
      this.arrFruits = res;
    })
  }

  addCart(index: number){
    this.store.dispatch(addToCart({item: this.arrFruits[index]}));
  }

  removeCart(){
    // this.store.dispatch(removeFromCart());
  }

}
