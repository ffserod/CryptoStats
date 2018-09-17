import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Item } from '../../models/item';
import { Observable } from 'rxjs/Observable';
import { Platform } from 'ionic-angular';

@Injectable()
export class Items {

  basepath = "api";

  constructor(public http: HttpClient, private _platform: Platform) {
    if(this._platform.is("cordova")){
      this.basepath = "https://api.coinmarketcap.com/";
    }
  }

  query(params?: any) : Observable<Items[]> {
    let data = this.http.get(`${this.basepath}/v2/ticker/?convert=EUR&limit=25&sort=rank&structure=array`);
    console.log("query");
    return data as Observable<Items[]>;
  }

}
