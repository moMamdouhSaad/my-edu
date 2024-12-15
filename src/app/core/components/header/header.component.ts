import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
  IonItem,
} from '@ionic/angular/standalone';
import { ResponsiveBaseComponent } from 'src/app/shared/bases/responsive-base.component';
import { ResponsiveService } from '../../services/responsive.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IonTitle,
    IonToolbar,
    IonHeader,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent extends ResponsiveBaseComponent {
  constructor(public override readonly responsiveService: ResponsiveService) {
    super(responsiveService);
  }
}
