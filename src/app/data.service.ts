import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { currencyList} from './currencies/currencyList';
// import { marketList } from './markets/marketList';

// This API enables cross-origin requests to anywhere.
const publicCors1 = 'https://cors-anywhere.herokuapp.com/';
const publicCors2 = 'https://jsonp.afeld.me/?url=';

@Injectable()
export class DataService {
  result: any;

  constructor(private _http: HttpClient) {}

  getCurrencies() {
    return this._http
      .get(publicCors1 + 'https://min-api.cryptocompare.com/data/all/coinlist')
      .map(result => (this.result = result.Data));

  }


}
