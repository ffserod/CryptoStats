import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { StatsPage } from '../pages/stats/stats';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { GraphPage } from '../pages/graph/graph';
import { TabsPage } from '../pages/tabs/tabs';
import { Items } from '../mocks/providers/items';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settingsProvider/settingsProvider';
import { WebsocketProvider } from '../providers/websocket/websocket';

@NgModule({
  declarations: [
    MyApp,
    StatsPage,
    SettingsPage,
    HomePage,
    GraphPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StatsPage,
    SettingsPage,
    HomePage,
    GraphPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    Items,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    WebsocketProvider
  ]
})
export class AppModule {}
