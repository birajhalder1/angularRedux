import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.page.html',
  styleUrls: ['./vegetables.page.scss'],
})
export class VegetablesPage implements OnInit {

  constructor(private service: ApiServiceService) { }
  arrVegetable: any = [];
  ngOnInit() {
    this.getVegetableData();
  }
  getVegetableData(){
    this.service.getVegetable().subscribe((res: any)=> {
      this.arrVegetable = res;
    })
  }
}
