import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

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

}
