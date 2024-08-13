import { Component} from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../globals';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(fb: FormBuilder, private globals: Globals, private service: ApiServiceService, private router: Router, private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {

  }

  ionViewDidEnter() {
    
  }
}
