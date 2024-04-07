import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab53PageRoutingModule } from './tab5.3-routing.module';

import { Tab53Page } from './tab5.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab53PageRoutingModule
  ],
  declarations: [Tab53Page]
})
export class Tab53PageModule {}
