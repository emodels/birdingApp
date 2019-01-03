import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.page.html',
  styleUrls: ['./bird.page.scss'],
})
export class BirdPage implements OnInit {

  bird: any;
  codesArray: string[] = [];

  constructor(public dataService: DataService, private navCtrl: NavController, private loadCtrl: LoadingController) { }

  ngOnInit() {

    this.presentLoading();

    if (this.dataService.birdSelected) {

      this.bird = this.dataService.birdSelected;

      if (this.bird.code) {

         const categoryCharsArray = this.bird.code.split('');

         categoryCharsArray.forEach(char => {
             this.codesArray.push(char);
         });

         console.log(this.codesArray);
      }
    }
  }

  goBack(): void {
     this.navCtrl.goBack();
  }

  async presentLoading() {
    const loading = await this.loadCtrl.create({
        message: 'Loading',
        duration: 2000
    });
    return await loading.present();
  }
}
