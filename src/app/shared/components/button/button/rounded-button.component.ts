import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-rounded-button',
  standalone: true,
  imports: [IonButton],
  templateUrl: './rounded-button.component.html',
  styleUrl: './rounded-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoundedButtonComponent {
  @Input() color: string = 'primary'; // Default color
  @Input() size: string = 'default'; // Default size
  @Input() buttonType: string = 'button'; // Type of the button
  @Input() additionalClass: string = ''; // Additional classes for customization
  @Input() borderRadius: string = '5px'; // Default border radius
  @Input() fontWeight:number = 500;
  @Input() expand:'full'|'block'|''='';
  @Input() disabled:boolean=false

  fill: string = 'outline';   // Default fill
  shape: string = 'round'; // Default shape


}
