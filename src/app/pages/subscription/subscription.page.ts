import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonGrid, IonCol } from '@ionic/angular/standalone';
import { SubscriptionFormComponent } from './subscriptionForm/subscriptionForm.component';
import { BillSummaryComponent } from './billSummary/billSummary.component';
import { ResponsiveService } from 'src/app/core/services/responsive.service';
import { NgClass, NgIf } from '@angular/common';
import { ResponsiveBaseComponent } from 'src/app/shared/bases/responsive-base.component';

@Component({
  selector: 'app-subscription',
  templateUrl: 'subscription.page.html',
  styleUrls: ['subscription.page.scss'],
  standalone: true,
  imports: [IonContent,IonGrid,IonRow,IonCol,SubscriptionFormComponent,BillSummaryComponent,NgClass],
})
export class SubscriptionPage extends ResponsiveBaseComponent {
  constructor(public override responsiveService: ResponsiveService) {
    super(responsiveService)

  }
}
