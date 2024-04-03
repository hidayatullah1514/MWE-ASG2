import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'tab4.1',
    loadChildren: () => import('./tab4.1/tab4.1.module').then( m => m.Tab41PageModule)
  },
  {
    path: 'tab4.2',
    loadChildren: () => import('./tab4.2/tab4.2.module').then( m => m.Tab42PageModule)
  },
  {
    path: 'tab4.3',
    loadChildren: () => import('./tab4.3/tab4.3.module').then( m => m.Tab43PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
