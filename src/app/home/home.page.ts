import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArPage } from '../pages/ar/ar.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}

  async openAR(target: string) {
    const modal = await this.modalCtrl.create({
      component: ArPage,
      componentProps: { target }
    });

    await modal.present();
  }

}
