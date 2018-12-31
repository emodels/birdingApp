import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'endemic',
        children: [
          {
            path: '',
            loadChildren: '../endemic/endemic.module#EndemicPageModule'
          }
        ]
      },
      {
        path: 'migrant',
        children: [
          {
            path: '',
            loadChildren: '../migrant/migrant.module#MigrantPageModule'
          }
        ]
      },
      {
        path: 'birds-list',
        children: [
          {
            path: '',
            loadChildren: '../birds-list/birds-list.module#BirdsListPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
