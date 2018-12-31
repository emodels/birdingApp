import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'endemic', loadChildren: './endemic/endemic.module#EndemicPageModule' },
  { path: 'migrant', loadChildren: './migrant/migrant.module#MigrantPageModule' },
  { path: 'tabs/birds-list', loadChildren: './birds-list/birds-list.module#BirdsListPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
