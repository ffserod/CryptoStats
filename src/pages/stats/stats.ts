import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../mocks/providers/items';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {

  currentItems: Item[];
  ETH_quant = 0.14534772;

  constructor(public navCtrl: NavController, public items: Items) {
  }

  ionViewDidLoad() {
    this.getItems();
  }

  getItems(refresher?) {
    this.items .query().subscribe((items : Item[]) => {
        this.currentItems = items;
        console.log("portfolio");
        
        if(refresher) refresher.complete();
      });
  }
 

}
