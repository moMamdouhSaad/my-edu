import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubscriptionStepComponent } from 'src/app/shared/components/subscriptionStep/subscriptionStep.component';

@Component({
  selector: 'app-subscription-proccess',
  standalone: true,
  imports: [SubscriptionStepComponent],
  templateUrl: './subscriptionProccess.component.html',
  styleUrl: './subscriptionProccess.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionProccessComponent { }
