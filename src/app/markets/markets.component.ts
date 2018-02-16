import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { marketList } from './marketList';


@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  objectKeys = Object.keys;
  markets = marketList;

  // constructor(private _data: DataService) { }

  ngOnInit() {

      console.log(this.markets);


    // this._data.getMarkets()
    //   .subscribe(res => {
    //     this.markets = res;
    //     console.log(res);
    //   });

  }

}
