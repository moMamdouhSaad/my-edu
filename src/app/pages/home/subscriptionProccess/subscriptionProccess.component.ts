import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubscriptionStepComponent } from 'src/app/shared/components/subscriptionStep/subscriptionStep.component';
import { IonButton, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-subscription-proccess',
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonButton, SubscriptionStepComponent,NgFor],
  templateUrl: './subscriptionProccess.component.html',
  styleUrl: './subscriptionProccess.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionProccessComponent {
  subscriptionSteps: any[] = [
    {
      number: 1,
      title: 'Choose Your Plan',
      description: 'Select a subscription that matches your child\'s learning needs and interests.',
      icon: 'gift'
    },
    {
      number: 2,
      title: 'Personalize',
      description: 'Provide details about your child\'s age, learning style, and preferences.',
      icon: 'person'
    },
    {
      number: 3,
      title: 'Receive & Learn',
      description: 'Get a monthly box packed with engaging educational materials delivered to your door.',
      icon: 'mail'
    }
  ];
 }
