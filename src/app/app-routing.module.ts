import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PairsComponent } from './pairs/pairs.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { MarketsComponent } from './markets/markets.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: PairsComponent
  },
  {
    path: 'currencies',
    component: CurrenciesComponent
  },
  {
    path: 'markets',
    component: MarketsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [
    PairsComponent,
    CurrenciesComponent,
    MarketsComponent,
    AboutComponent
  ]
})
export class AppRoutingModule { }
