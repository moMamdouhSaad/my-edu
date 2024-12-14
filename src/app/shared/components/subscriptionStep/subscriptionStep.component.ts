import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StepModel } from '../../models/step.model';
import { IonBadge } from "@ionic/angular/standalone";

@Component({
  selector: 'app-subscription-step',
  standalone: true,
  imports: [IonBadge, ],
  templateUrl: './subscriptionStep.component.html',
  styleUrl: './subscriptionStep.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionStepComponent {
  @Input({ required: true }) step!: StepModel;
}
