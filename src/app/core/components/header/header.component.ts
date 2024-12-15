import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, IonRow } from '@ionic/angular/standalone';
import { ResponsiveBaseComponent } from 'src/app/shared/bases/responsive-base.component';
import { ResponsiveService } from '../../services/responsive.service';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonRow,
    IonTitle,
    IonToolbar,
    IonHeader,
    NgClass,
    RouterModule,
    IonContent
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
