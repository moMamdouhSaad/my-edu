import { Component } from '@angular/core';
import { IonContent, IonRow, IonGrid, IonCol } from '@ionic/angular/standalone';
import { HeroSectionComponent } from "./heroSection/heroSection.component";
import { SubscriptionProccessComponent } from "./subscriptionProccess/subscriptionProccess.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCol, IonGrid, IonRow, IonContent, HeroSectionComponent, SubscriptionProccessComponent],
})
export class HomePage {
  constructor() {}
}
