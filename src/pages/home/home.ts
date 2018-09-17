import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../mocks/providers/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  currentItems: Item[];

  
constructor(public navCtrl: NavController, public items: Items) {
 }

  ionViewDidLoad() {
    this.getItems();
   
  }

  getItems(refresher?) {
    this.items .query().subscribe((items : Item[]) => {
        this.currentItems = items;
        console.log(this.currentItems);
        
        if(refresher) refresher.complete();
      });
  }

}
