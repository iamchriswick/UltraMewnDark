import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { currencyList} from './currencyList';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  objectKeys = Object.keys;
  currencies: any;

  constructor(private _data: DataService) {}

  ngOnInit() {

    this._data.getCurrencies().subscribe(res => {
      this.currencies = res;
      // console.log(res);
    });

    // if (typeof Storage !== 'undefined') {
    //   // Code for localStorage/sessionStorage.
    //   // console.log(sessionStorage.currencies);
    //   if (sessionStorage.getItem('currencies')) {

    //     this.currencies = sessionStorage.getItem('currencies');
    //     console.log(this.currencies);

    //   } else {
    //     this._data.getCurrencies().subscribe(res => {

    //       this.currencies = res;
    //       // console.log(res);
    //       sessionStorage.setItem('currencies', this.currencies);

    //     });
    //   }
    // } else {
    //   // Sorry! No Web Storage support..
    //   console.log('Sorry! No Web Storage support..');

    //   this._data.getCurrencies().subscribe(res => {
    //     this.currencies = res;
    //     // console.log(res);
    //   });
    // }
  }
}

// https://api.cryptonator.com/api/ticker/btc-usd

// .subscribe(
//   data => {
//     // console.log(data['rows']);
//     const result = data['rows'];
//     console.log(result);
//   },
//   err => { console.log(err); }
// );
