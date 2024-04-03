import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab41PageRoutingModule } from './tab4.1-routing.module';

import { Tab41Page } from './tab4.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab41PageRoutingModule
  ],
  declarations: [Tab41Page]
})
export class Tab41PageModule {}
