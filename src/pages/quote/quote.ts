import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
  }
  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }
  onClose(remove = false) {
    // dismiss the modal and it will show the top page of the stack from which the modal is displayed
    this.viewCtrl.dismiss(remove);
  }
}
