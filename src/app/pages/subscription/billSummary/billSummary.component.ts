import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonList, IonItem, IonLabel, IonNote, IonRow, IonCol } from "@ionic/angular/standalone";
import { ResponsiveService } from 'src/app/core/services/responsive.service';
import { ResponsiveBaseComponent } from 'src/app/shared/bases/responsive-base.component';
import { ButtonComponent } from 'src/app/shared/components/button/button/rounded-button.component';

@Component({
  selector: 'app-bill-summary',
  standalone: true,
  imports: [ IonRow, IonNote, IonLabel, IonItem, IonList,ButtonComponent,NgIf ],
  templateUrl: './billSummary.component.html',
  styleUrl: './billSummary.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BillSummaryComponent extends ResponsiveBaseComponent {
   constructor(public override readonly responsiveService:ResponsiveService){
      super(responsiveService);
    }
 }
