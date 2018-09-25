import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {AlertController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams,
              private alertCtrl: AlertController) {
  }

  /*
  ionViewDidLoad(){
    // the template will be rendered by angular b4 this method is triggered by ionic
    this.quoteGroup = this.navParams.data;
    // use elvis (?) operator on quoteGroup in template
  }
  */
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFav(selectedQuote: Quote) {
    // show the alert
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add the quote to favourites',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('OK');
          }
        },
        {
          text:'No, i changed my mind!',
          role: 'cancel',
          handler: ()=>{
            console.log('cancel');
          }
        }
      ]
    });
    alert.present();
  }
}
