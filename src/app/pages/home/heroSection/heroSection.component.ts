import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/angular/standalone";
import { ResponsiveService } from 'src/app/core/services/responsive.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [IonButton, IonCol, IonRow, IonGrid,NgClass ],
  templateUrl: './heroSection.component.html',
  styleUrl: './heroSection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  constructor(public readonly responsiveService:ResponsiveService){}
 }
