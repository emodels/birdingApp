import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from  '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-birds-list',
  templateUrl: './birds-list.page.html',
  styleUrls: ['./birds-list.page.scss'],
})
export class BirdsListPage implements OnInit {

  private type: any;
  private id: any;

  enlargeImages: any;
  title: any;
  titleImage: any;
  birdsAll: any;
  birds: any;

  constructor(public dataService: DataService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {

    this.type = this.route.snapshot.paramMap.get('type');
    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.type);
    console.log(this.id);

    this.dataService.getBirds().subscribe(
        (response) => {

            this.birdsAll = response;

            switch (this.type) {

                case 'search':

                    if (this.id == 'all') {

                        this.title = 'All Birds';
                        this.birds = this.birdsAll;

                    } else {

                        this.title = 'Search : ' + this.id;
                        this.birds = this.birdsAll.filter(bird => bird.name.toLowerCase().includes(this.id.toLowerCase()));
                    }

                    break;

                case 'category':

                    this.getCategory(this.id);
                    this.birds = this.birdsAll.filter(bird => bird.category == this.id);

                    break;

                case 'endemic':

                    this.title = 'Endemic Birds';
                    this.birds = this.birdsAll.filter(bird => bird.endemic == 1);
                    break;

                case 'migrant':

                    this.title = 'Migrant Birds';
                    this.birds = this.birdsAll.filter(bird => bird.migrant == 1);
                    break;
            }
        }
    );
  }

  getCategory(id: number): void {
      this.dataService.getCategories().subscribe(
          (categories) => {
              const category = categories.filter(category => category.id == id)[0];
              this.title = category.name;
              this.titleImage = category.image;
          }
      );
  }

  viewBird(bird: any): void {
      this.dataService.birdSelected = bird;
      this.navCtrl.navigateForward('bird');
  }

  goBack(): void {
    this.navCtrl.goBack();
  }
}
