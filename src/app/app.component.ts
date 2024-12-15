import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonRow } from '@ionic/angular/standalone';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonContent, IonApp, IonRouterOutlet,HeaderComponent,FooterComponent,
  ],
  providers:[]
})
export class AppComponent {
  constructor() {}
}
