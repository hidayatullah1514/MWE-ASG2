import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab43Page } from './tab4.3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab43PageRoutingModule {}
