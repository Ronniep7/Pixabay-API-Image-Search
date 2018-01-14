import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageServiceService {

  private query: string;
  private API_KEY: string = '7699640-9602da3c90dbfd42cc2ba6661';
  private API_URL: string = 'https://pixabay.com/api/?key=';
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = "&per_page=10";

  constructor(private _http: Http){ }

  getImage(query){
    return this._http.get(this.URL + query + this.perPage)
    .map(res => res.json());
  }
  
}
