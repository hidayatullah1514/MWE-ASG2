import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab52PageRoutingModule } from './tab5.2-routing.module';

import { Tab52Page } from './tab5.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab52PageRoutingModule
  ],
  declarations: [Tab52Page]
})
export class Tab52PageModule {}
