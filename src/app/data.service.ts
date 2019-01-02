import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public birdSelected: any;
  private categories: Observable<any> = null;
  private birds: Observable<any> = null;

  getCategories(): Observable<any> {

    if (this.categories != null) {

      console.log('Existing Categories Data Found');
      return this.categories;

    } else {

      console.log('Get New Categories Data from JSON');

        this.categories = this.http.get('assets/json/categories.json').pipe(map((data: any) => {
          data.sort((a, b) => {
            return a.name < b.name ? -1 : 1;
          });
          return data;
        }));

        return this.categories;
    }
  }

  getBirds(): Observable<any> {

    if (this.birds != null) {

      console.log('Existing Birds Data Found');
      return this.birds;

    } else {

      console.log('Get New Birds Data from JSON');

      this.birds = this.http.get('assets/json/birds.json').pipe(map((data: any) => {
        data.sort((a, b) => {
          return a.name < b.name ? -1 : 1;
        });
        return data;
      }));

      return this.birds;
    }
  }
}
