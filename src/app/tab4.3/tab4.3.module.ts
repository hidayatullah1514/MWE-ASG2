import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab43PageRoutingModule } from './tab4.3-routing.module';

import { Tab43Page } from './tab4.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab43PageRoutingModule
  ],
  declarations: [Tab43Page]
})
export class Tab43PageModule {}
