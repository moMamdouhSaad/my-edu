import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { ResponsiveService } from 'src/app/core/services/responsive.service';
import { ButtonComponent } from "../../../shared/components/button/button/rounded-button.component";
import { ResponsiveBaseComponent } from 'src/app/shared/bases/responsive-base.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, NgClass, ButtonComponent,RouterModule],
  templateUrl: './heroSection.component.html',
  styleUrl: './heroSection.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeroSectionComponent extends ResponsiveBaseComponent {
  constructor(public override readonly responsiveService:ResponsiveService){
    super(responsiveService);
  }
 }
