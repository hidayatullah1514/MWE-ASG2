import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab51PageRoutingModule } from './tab5.1-routing.module';

import { Tab51Page } from './tab5.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab51PageRoutingModule
  ],
  declarations: [Tab51Page]
})
export class Tab51PageModule {}
