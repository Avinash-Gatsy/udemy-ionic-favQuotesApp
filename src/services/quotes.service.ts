import {Quote} from "../data/quote.interface";

export class QuotesService {
  private favouriteQuotes: Quote[] = [];

  addQuoteToFav(quote: Quote){
    this.favouriteQuotes.push(quote);
  }
  removeQuoteFrmFav(quote: Quote){
    const pos = this.favouriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.favouriteQuotes.splice(pos, 1);
  }
  getFavQuotes(){
    return this.favouriteQuotes.slice();
  }
}
