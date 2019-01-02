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
        redirectTo: '/tabs/birds-list/endemic/all',
        pathMatch: 'full'
      },
      {
        path: 'migrant',
        redirectTo: '/tabs/birds-list/migrant/all',
        pathMatch: 'full'
      },
      {
        path: 'birds-list/:type/:id',
        children: [
          {
            path: '',
            loadChildren: '../birds-list/birds-list.module#BirdsListPageModule'
          }
        ]
      },
      {
        path: 'bird',
        children: [
          {
            path: '',
            loadChildren: '../bird/bird.module#BirdPageModule'
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
