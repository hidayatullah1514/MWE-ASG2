import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab53Page } from './tab5.3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab53Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab53PageRoutingModule {}
