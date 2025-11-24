import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.page.html',
  styleUrls: ['./ar.page.scss'],
  standalone: false,
})
export class ArPage implements OnInit {

  @Input() target: string = 'trex';   // viene desde Home
  safeUrl!: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    const url = `./assets/ar/ar.html?target=${this.target}`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}

