import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable {

    return this.http.get('assets/json/categories.json').pipe(map((data) => {
      data.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      });
      return data;
    }));
  }

  getBirds(): Observable {

    return this.http.get('assets/json/birds.json').pipe(map((data) => {
      data.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      });
      return data;
    }));
  }
}
