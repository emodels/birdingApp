import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.page.html',
  styleUrls: ['./bird.page.scss'],
})
export class BirdPage implements OnInit {

  bird: any;

  constructor(public dataService: DataService, private navCtrl: NavController) { }

  ngOnInit() {

    if (this.dataService.birdSelected) {

      this.bird = this.dataService.birdSelected;
    }
  }

  goBack(): void {
     this.navCtrl.goBack();
  }
}
