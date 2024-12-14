import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubscriptionStepComponent } from 'src/app/shared/components/subscriptionStep/subscriptionStep.component';
import { IonButton, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { NgFor } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button/rounded-button.component';
import { StepModel } from 'src/app/shared/models/step.model';

@Component({
  selector: 'app-subscription-proccess',
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, SubscriptionStepComponent,NgFor,ButtonComponent],
  templateUrl: './subscriptionProccess.component.html',
  styleUrl: './subscriptionProccess.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionProccessComponent {
  subscriptionSteps: StepModel[] = [
    {
      stepNO:'Step 1 :',
      title: 'Subscribe',
      description: 'Select a subscription plan that suits your child\'s learning needs and preferences.',
      imgSrc: 'assets/images/step-1.svg'
    },
    {
      stepNO:'Step 2 :',
      title: 'Personalise Your Box',
      description: 'Tell us about your child\'s age, interests, and learning goals, and we\'ll customize their surprise box accordingly.',
      imgSrc: 'assets/images/step-2.svg'
    },
    {
      stepNO:'Step 3 :',
      title: 'Receive Your Surprise Box',
      description: 'Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.',
      imgSrc: 'assets/images/step-1.svg'
    }
  ];
 }
