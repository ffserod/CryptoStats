import { Component } from '@angular/core';

import { StatsPage } from '../stats/stats';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { GraphPage } from '../graph/graph';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StatsPage;
  tab3Root = SettingsPage;
  tab4Root = GraphPage;

  constructor() {

  }
}
