import { LifecycleEventsPage } from './../lifecycle-events/lifecycle-events';
import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(): void {
    this.navCtrl.push(ContactPage, {
      type: 'push',
      course: 'Ionic 2',
      year: 2017,
      message: () => {
        console.log('Welcome to Ionic 2 Course!');
      }
    });
	//this.navCtrl.push().then; Fazer algo a mais quando push finalizar
  }

  setRoot(): void {
    this.navCtrl.setRoot(ContactPage, {
      type: 'setRoot'
    });
  }

  lifecycle(): void {
    this.navCtrl.push(LifecycleEventsPage)
      .then((authorizedAccess: boolean) => {

        if(authorizedAccess){
          console.log('Page pushed');
        } else {
          console.log('Acesso não autorizado');          
        }
        
      }).catch(error => {
        console.log('Mensagem se houver erro', error);
        
      });
  }
}
