import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab61PageRoutingModule } from './tab6.1-routing.module';

import { Tab61Page } from './tab6.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab61PageRoutingModule
  ],
  declarations: [Tab61Page]
})
export class Tab61PageModule {}
