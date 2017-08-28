import { ContactPage } from './../pages/contact/contact';
import { Component, ViewChild } from '@angular/core'; //Importar ViewChild
import { Platform, Nav } from 'ionic-angular'; //Importar Nav
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav; //Vai trazer uma instância de nav para cá

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //this.nav.push(ContactPage); 
    });
  }
}

