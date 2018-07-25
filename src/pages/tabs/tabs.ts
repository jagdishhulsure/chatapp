import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RewardsPage } from '../rewards/rewards';
import { SettingsPage } from '../settings/settings';
import { NewsPage } from '../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = RewardsPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
