import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonGrid, IonCol } from '@ionic/angular/standalone';
import { SubscriptionFormComponent } from './subscriptionForm/subscriptionForm.component';
import { BillSummaryComponent } from './billSummary/billSummary.component';

@Component({
  selector: 'app-subscription',
  templateUrl: 'subscription.page.html',
  styleUrls: ['subscription.page.scss'],
  standalone: true,
  imports: [IonContent,IonGrid,IonRow,IonCol,SubscriptionFormComponent,BillSummaryComponent],
})
export class SubscriptionPage {
  constructor() {}
}
