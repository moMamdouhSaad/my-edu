import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-subscription-step',
  standalone: true,
  imports: [],
  templateUrl: './subscriptionStep.component.html',
  styleUrl: './subscriptionStep.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionStepComponent {
@Input()step:any;

}
