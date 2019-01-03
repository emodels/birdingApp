import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tabs/birds-list/:type/:id', loadChildren: './birds-list/birds-list.module#BirdsListPageModule' },
  { path: 'bird', loadChildren: './bird/bird.module#BirdPageModule' },  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'birds-in-sri-lanka', loadChildren: './birds-in-sri-lanka/birds-in-sri-lanka.module#BirdsInSriLankaPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
