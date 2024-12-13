import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonList, IonItem, IonLabel, IonNote } from "@ionic/angular/standalone";

@Component({
  selector: 'app-bill-summary',
  standalone: true,
  imports: [IonNote, IonLabel, IonItem, IonList, ],
  templateUrl: './billSummary.component.html',
  styleUrl: './billSummary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillSummaryComponent { }
