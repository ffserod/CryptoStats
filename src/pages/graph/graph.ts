import { Component} from '@angular/core';
import { NavController, NavParams, Platform} from 'ionic-angular';


declare var TradingView: any; 


@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html',
})
export class GraphPage {

  ChartTheme: String;

  //@ViewChild('chart') chartRef: ElementRef;
  //@ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {

    platform.ready().then((readySource) => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
  }

  ionViewDidLoad() {
    this.ChartTheme = 'Dark';
    this.showChart(this.ChartTheme);
  }

  showChart(chartTheme){
    new TradingView.widget(
      {
      "width": this.platform.width(),
      "height": this.platform.height()-110,
      "symbol": "COINBASE:ETHEUR",
      "interval": "D",
      "timezone": "Europe/London",
      "theme": chartTheme,
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "withdateranges": true,
      "allow_symbol_change": true,
      "studies": [
        "BB@tv-basicstudies",
        "MACD@tv-basicstudies"
      ],
      "container_id": "tradingview_f4e4b"
    }
     );
     
    }

    
  

}
