import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BirdsListPage } from '../birds-list/birds-list.page';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories: any;
  searchQuery: string;

  constructor(public navCtrl: NavController, public dataService: DataService) { }

  ngOnInit() {
     this.dataService.getCategories().subscribe(categories => this.categories = categories);
  }

  viewCategory(any): void {

    this.navCtrl.navigateForward('tabs/birds-list/category/' + any.name);
  }

  searchBirds(any): void {

      this.navCtrl.navigateForward('tabs/birds-list/search/' + this.searchQuery);
  }
}
