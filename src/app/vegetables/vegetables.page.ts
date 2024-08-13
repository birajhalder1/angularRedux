import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../store/cart.action';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.page.html',
  styleUrls: ['./vegetables.page.scss'],
})
export class VegetablesPage implements OnInit {

  constructor(private service: ApiServiceService, private store: Store<any>) { }
  arrVegetable: any = [];
  ngOnInit() {
    this.getVegetableData();
  }
  getVegetableData(){
    this.service.getVegetable().subscribe((res: any)=> {
      this.arrVegetable = res;
    })
  }
  addCart(index: number){
    this.store.dispatch(addToCart({item: this.arrVegetable[index]}));
  }
}
