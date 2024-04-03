import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab41Page } from './tab4.1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab41PageRoutingModule {}
