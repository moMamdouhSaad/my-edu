import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonList, IonItem, IonLabel, IonButton, IonInput,IonSelect,IonSelectOption } from "@ionic/angular/standalone";
import { ButtonComponent } from 'src/app/shared/components/button/button/rounded-button.component';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [IonInput, IonButton, IonLabel, IonItem, IonList,ReactiveFormsModule,ButtonComponent,IonSelect,IonSelectOption,NgFor ],
  templateUrl: './subscriptionForm.component.html',
  styleUrl: './subscriptionForm.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionFormComponent {

  subscriptionForm: FormGroup;
  dates: number[] = Array.from({length: 31}, (_, i) => i + 1);
  months: {value: number, name: string}[] = [
    {value: 1, name: 'January'},
    {value: 2, name: 'February'},
    {value: 3, name: 'March'},
    {value: 4, name: 'April'},
    {value: 5, name: 'May'},
    {value: 6, name: 'June'},
    {value: 7, name: 'July'},
    {value: 8, name: 'August'},
    {value: 9, name: 'September'},
    {value: 10, name: 'October'},
    {value: 11, name: 'November'},
    {value: 12, name: 'December'}
  ];

  years: number[] = this.generateYearRange();

  constructor(private fb: FormBuilder) {
    this.subscriptionForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      childName: ['', [Validators.required]],
      childAge: this.fb.group({
        date: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required]
      }),
      childGrade: ['', [Validators.required]]

    });
  }

  onSubmit() {
    if (this.subscriptionForm.valid) {
      console.log(this.subscriptionForm.value);
      // Handle form submission logic
    }
  }
  private generateYearRange(): number[] {
    const currentYear = new Date().getFullYear();
    return Array.from(
      {length: 50},
      (_, i) => currentYear - i
    );
  }

  validateBirthDate() {
    const childBirthForm = this.subscriptionForm.get('childAge');
    const date = childBirthForm?.get('date')?.value;
    const month = childBirthForm?.get('month')?.value;
    const year = childBirthForm?.get('year')?.value;

    if (date && month && year) {
      // Validate actual date (e.g., check for February 29th in leap years)
      const birthDate = new Date(year, month - 1, date);
      const isValidDate =
        birthDate.getFullYear() === year &&
        birthDate.getMonth() === month - 1 &&
        birthDate.getDate() === date;

      if (!isValidDate) {
        childBirthForm.setErrors({'invalidDate': true});
      }
    }
  }
 }
