import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-birds-in-sri-lanka',
  templateUrl: './birds-in-sri-lanka.page.html',
  styleUrls: ['./birds-in-sri-lanka.page.scss'],
})
export class BirdsInSriLankaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack(): void {
    this.navCtrl.goBack();
  }

}
