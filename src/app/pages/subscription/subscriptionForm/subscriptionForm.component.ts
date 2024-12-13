import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonList, IonItem, IonLabel, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonList,ReactiveFormsModule ],
  templateUrl: './subscriptionForm.component.html',
  styleUrl: './subscriptionForm.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionFormComponent {

  subscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscriptionForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      childName: ['', [Validators.required]],
      childAge: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.subscriptionForm.valid) {
      console.log(this.subscriptionForm.value);
      // Handle form submission logic
    }
  }
 }
