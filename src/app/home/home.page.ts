import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BirdsListPage } from '../birds-list/birds-list.page';
import { DataService } from '../data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categoriesAll: any;
  categories: any;

  constructor(public navCtrl: NavController, public dataService: DataService, private loadCtrl: LoadingController) { }

  ngOnInit() {

     this.presentLoading();

     this.dataService.getCategories().subscribe((response) => {
         this.categoriesAll = response;
         this.categories = response;
     });
  }

  viewCategory(any): void {

    this.navCtrl.navigateForward('tabs/birds-list/category/' + any.id);
  }

  searchCategories(event): void {

    if (!event.srcElement.value) {

      this.categories = this.categoriesAll;

    } else {

      this.categories = this.categoriesAll.filter(category => category.name.toLowerCase().includes(event.srcElement.value.toLowerCase()));
    }
  }
  async presentLoading() {
    const loading = await this.loadCtrl.create({
      message: 'Loading',
      duration: 2000
    });
    return await loading.present();
  }
}
