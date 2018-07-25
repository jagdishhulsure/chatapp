import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatsPage } from '../chats/chats';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateTotabs()
  {
    this.navCtrl.push(ChatsPage);
  }

}
