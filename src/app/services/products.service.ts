import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const BASE_URL='http://localhost:8089/api/movie';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private http=inject(HttpClient);
  constructor() {  }

    getMovies(){
      return this.http.get(BASE_URL);
    }
 

}
