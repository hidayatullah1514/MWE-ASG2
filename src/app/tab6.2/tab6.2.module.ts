import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab62PageRoutingModule } from './tab6.2-routing.module';

import { Tab62Page } from './tab6.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab62PageRoutingModule
  ],
  declarations: [Tab62Page]
})
export class Tab62PageModule {}
