import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pairs',
  templateUrl: './pairs.component.html',
  styleUrls: ['./pairs.component.css']
})
export class PairsComponent implements OnInit {

  objectKeys = Object.keys;
  cryptos: any;

  constructor(private _data: DataService) {

  }

  ngOnInit() {

    // this._data.getExchanges()
    //   .subscribe(res => {
    //     this.cryptos = res;
    //     console.log(res);
    //   });

  }
}

