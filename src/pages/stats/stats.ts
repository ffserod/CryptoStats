import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../mocks/providers/items';

import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketProvider } from '../../providers/websocket/websocket';

export interface Message{
  bitcoin: any,
  ethereum: any,
  litecoin: any
}


@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {

  public currentItems: Item[];
  ETH_quant = 0.07267386;
  wsurl = "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,litecoin,vertcoin";

  public message: Subject<Message>;

  WS_BTC: number;
  WS_ETH: number;
  WS_LTC: number;
  

  constructor(public navCtrl: NavController, public items: Items, private wsService: WebsocketProvider) {
    this.message = <Subject<Message>>wsService
    .connect(this.wsurl)
    .map((response: MessageEvent): Message => {
      let data = JSON.parse(response.data);
      return {
        bitcoin: data.bitcoin,
        ethereum: data.ethereum,
        litecoin: data.litecoin
      }
    })
  }

  ionViewDidLoad() {
    this.getItems();
    this.message.subscribe(msg => {
     console.log("Response From Websocket Server:" + msg.bitcoin);
     if(msg.bitcoin != undefined ){
      this.WS_BTC = msg.bitcoin;
     }
     if(msg.ethereum != undefined){
      this.WS_ETH = msg.ethereum;
     }
     if(msg.litecoin != undefined){
      this.WS_LTC = msg.litecoin;
     }
    })
  }

  getItems(refresher?) {
    this.items.query().subscribe((items : Item[]) => {
        this.currentItems = items;
        console.log("portfolio");
        /*this.WS_BTC = this.currentItems.data[0].quotes.USD.price;
        this.WS_ETH = this.currentItems.data[1].quotes.USD.price;
        this.WS_LTC = this.currentItems.data[6].quotes.USD.price;*/
        
        if(refresher) refresher.complete();
      });
  }
 

}
