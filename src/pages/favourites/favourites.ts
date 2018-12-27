import {Component} from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes.service";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService,
              private modalCtrl: ModalController,
              private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    // this will get executed every time b4 the view is loaded
    // this will get executed even if the page is cached
    this.quotes = this.quotesService.getFavQuotes();
  }

  onViewQuote(quote: Quote) {
    //open the modal - quotePage
    //pass quote as the 2nd arg
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove) {
        this.onRemoveFrmFav(quote);
      }
    });
  }

  onRemoveFrmFav(quote: Quote){
    this.quotesService.removeQuoteFrmFav(quote);
    // once the quotes are modified, re-render the page
    //this.quotes = this.quotesService.getFavQuotes();

    //or remove the quote from quotes[]
    const position = this.quotes.findIndex((qouteEl: Quote) => {
      return qouteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  getBg(){
    return this.settingsService.isAltBg() ? 'altQuoteBg' : 'quoteBg'
  }
}
