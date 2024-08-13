import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient , HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(
    private http: HttpClient, 
  ) { }

  getFruits(): Observable<any> {
    let arrdata = [
      {
        "name" : "Apple",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
        "price" : 35
      },
      {
        "name" : "Banana",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
        "price" : 12
      },
      {
        "name" : "Grapes",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
        "weight": 0.1,
        "price" : 45
      },
      {
        "name" : "Pineapple",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
        "price" : 200
      }
    ]

    return of(arrdata)
  }

  getVegetable(): Observable<any> {
    let arrdata = [
      {
        "name":"Cabbage",
        "image":"https://www.freepngimg.com/thumb/categories/2970.png",
        "quantity":"One Unit",
        "id":2,
        "price": 30
      },
      {
        "name":"Capsicum",
        "image":"https://www.nicepng.com/png/detail/52-525615_green-bell-pepper-png-green-capsicum-png.png",
        "quantity":"One Unit",
        "id":7,
        "price": 5
      },
      {
        "name":"Garlic",
        "image":"https://www.freepngimg.com/thumb/garlic/2-2-garlic-transparent-thumb.png",
        "quantity":"One Unit",
        "id":10,
        "price": 20
      },
      {
        "name":"Beetroot",
        "image":"https://pngimg.com/uploads/beet/beet_PNG28.png",
        "quantity":"One Unit",
        "id":11,
        "price": 20
      },
      {
        "name":"Tomatoes",
        "image":"https://www.freepngimg.com/thumb/categories/2985.png",
        "quantity":"One Unit",
        "id":13,
        "price": 5
      },
      {
        "name":"Celeriac",
        "image":"https://w7.pngwing.com/pngs/252/146/png-transparent-celeriac-leaf-vegetable-food-celery-herbes-leaf-vegetable-food-plant-stem-thumbnail.png",
        "quantity":"One Bunch",
        "id":16,
        "price": 5
      },
      {
        "name":"Carrots",
        "image":"https://www.freepngimg.com/thumb/categories/2971.png",
        "quantity":"One Kg",
        "id":18,
        "price": 60
      },
      {
        "name":"Onions",
        "image":"https://www.freepngimg.com/thumb/onion/10-red-onion-png-image-thumb.png",
        "quantity":"One Kg",
        "id":19,
        "price": 120
      },
      {
        "name":"Potatoes",
        "image":"https://www.freepngimg.com/thumb/potato/7-potato-png-images-pictures-download-thumb.png",
        "quantity":"One container",
        "id":20,
        "price": 80
      }
    ]

    return of(arrdata)
  }
}
