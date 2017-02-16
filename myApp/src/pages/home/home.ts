import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BookPage } from '../book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	hello = "Hello Word!";
	hello2 = "Hello Word! 2";
	
	hello3 = {
		name: "wutchara",
		lname: "rachadach"
	};
  constructor(public navCtrl: NavController) {
    
  }

  gotoBook(){

  	let data = {
  		title: 'goto Book.',
  		name: 'book page.',
  	};
  	this.navCtrl.push(BookPage, data);
  }

}//export class
