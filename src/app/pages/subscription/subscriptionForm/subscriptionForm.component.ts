import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonList, IonItem, IonLabel, IonInput,IonSelect,IonSelectOption, IonRow, IonCol, IonRadioGroup, IonRadio, IonCheckbox, IonIcon } from "@ionic/angular/standalone";
import { ResponsiveService } from 'src/app/core/services/responsive.service';
import { ResponsiveBaseComponent } from 'src/app/shared/bases/responsive-base.component';
import { ButtonComponent } from 'src/app/shared/components/button/button/rounded-button.component';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [IonCheckbox, IonRadio, IonRadioGroup, IonCol, IonRow, IonInput, IonLabel, IonItem, IonList,ReactiveFormsModule,FormsModule,ButtonComponent,IonSelect,IonSelectOption,NgFor,NgIf,NgClass ],
  templateUrl: './subscriptionForm.component.html',
  styleUrl: './subscriptionForm.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SubscriptionFormComponent extends ResponsiveBaseComponent {

  subscriptionForm: FormGroup;
  days: number[] = Array.from({length: 31}, (_, i) => i + 1);
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

  constructor(private fb: FormBuilder,public override responsiveService:ResponsiveService) {
    super(responsiveService)
    this.subscriptionForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      childName: ['', [Validators.required]],
      childAge: this.fb.group({
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required]
      }),
      childGrade: ['', [Validators.required]],
      topics: this.fb.array([])

    });
  }

  onSubmit() {
    console.log(this.subscriptionForm.value)
    if (this.subscriptionForm.valid) {
      console.log(this.subscriptionForm.value);
      // Handle form submission logic
    }
  }
  private generateYearRange(): number[] {
    const startYear = 2010; // Start year is 2010
    const length = 10; // Generate 10 years
    return Array.from({ length }, (_, i) => startYear + i);
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

   // Add a checkbox to the FormArray
   onCheckboxChange(event: any) {
    const topics: FormArray = this.subscriptionForm.get('topics') as FormArray;

    if (event.target.checked) {
      topics.push(this.fb.control(event.target.value));
    } else {
      const index = topics.controls.findIndex(x => x.value === event.target.value);
      topics.removeAt(index);
    }
  }


 }
