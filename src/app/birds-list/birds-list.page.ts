import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-birds-list',
  templateUrl: './birds-list.page.html',
  styleUrls: ['./birds-list.page.scss'],
})
export class BirdsListPage implements OnInit {

  birds: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBirds().subscribe(birds => this.birds = birds);
  }

}
