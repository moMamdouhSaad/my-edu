import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonHeader, IonFooter, IonToolbar, IonTitle, IonItem, IonInput, IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IonIcon, IonButton, IonInput, IonItem, IonTitle, IonToolbar, IonFooter, IonHeader, ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FooterComponent { }
