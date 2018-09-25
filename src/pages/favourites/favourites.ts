import { Component } from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes.service";
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes: Quote[];
  constructor(private quotesService: QuotesService){}

  ionViewWillEnter(){
    // this will get executed every time b4 the view is loaded
    // this will get executed even if the page is cached
    this.quotes = this.quotesService.getFavQuotes();
  }
}
