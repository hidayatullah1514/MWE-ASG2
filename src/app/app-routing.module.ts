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
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tab5.1',
    loadChildren: () => import('./tab5.1/tab5.1.module').then( m => m.Tab51PageModule)
  },
  {
    path: 'tab5.2',
    loadChildren: () => import('./tab5.2/tab5.2.module').then( m => m.Tab52PageModule)
  },
  {
    path: 'tab5.3',
    loadChildren: () => import('./tab5.3/tab5.3.module').then( m => m.Tab53PageModule)
  },
  {
    path: 'tab6',
    loadChildren: () => import('./tab6/tab6.module').then( m => m.Tab6PageModule)
  },
  {
    path: 'tab6.1',
    loadChildren: () => import('./tab6.1/tab6.1.module').then( m => m.Tab61PageModule)
  },
  {
    path: 'tab6.2',
    loadChildren: () => import('./tab6.2/tab6.2.module').then( m => m.Tab62PageModule)
  },
  {
    path: 'tab6.3',
    loadChildren: () => import('./tab6.3/tab6.3.module').then( m => m.Tab63PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
