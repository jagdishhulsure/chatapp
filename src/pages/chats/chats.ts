import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  message: string = '';
  s;
  messages: object[] = [];
  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams);
    this.s = this.db.list('/chat').valueChanges().subscribe( data =>{
      this.messages = data;
    })
  }

  sendMessage() {
    this.db.list('/chat').push({
      message: this.message
    })
    this.message = "";
  }

}
