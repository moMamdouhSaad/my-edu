import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonItem, IonButton, IonTitle, IonBackButton, IonButtons, IonToolbar, IonHeader, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent { }
