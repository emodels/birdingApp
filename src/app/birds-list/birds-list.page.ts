import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from  '@angular/router';

@Component({
  selector: 'app-birds-list',
  templateUrl: './birds-list.page.html',
  styleUrls: ['./birds-list.page.scss'],
})
export class BirdsListPage implements OnInit {

  private type: any;
  private id: any;

  birds: any;

  constructor(public dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getBirds().subscribe(birds => this.birds = birds);

    this.type = this.route.snapshot.paramMap.get('type');
    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.type);
    console.log(this.id);

    switch (this.type) {
      case 'search':


            break;
      case 'category':

            break;
    }
  }

}
