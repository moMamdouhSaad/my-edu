import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StepModel } from '../../models/step.model';
import { ResponsiveBaseComponent } from '../../bases/responsive-base.component';
import { ResponsiveService } from 'src/app/core/services/responsive.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-subscription-step',
  standalone: true,
  imports: [NgIf],
  templateUrl: './subscriptionStep.component.html',
  styleUrl: './subscriptionStep.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SubscriptionStepComponent extends ResponsiveBaseComponent {
  @Input({ required: true }) step!: StepModel;
   constructor(public override readonly responsiveService:ResponsiveService){
      super(responsiveService);
    }

}
