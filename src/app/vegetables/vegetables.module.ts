import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VegetablesPageRoutingModule } from './vegetables-routing.module';

import { VegetablesPage } from './vegetables.page';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VegetablesPageRoutingModule,
    ShareModule
  ],
  declarations: [VegetablesPage]
})
export class VegetablesPageModule {}
