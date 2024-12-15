import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormArray, FormGroup } from '@angular/forms';
import { SubscriptionFormComponent } from './subscriptionForm.component';
import { IonicModule } from '@ionic/angular';
import { ResponsiveService } from 'src/app/core/services/responsive.service';
import { of } from 'rxjs';

describe('SubscriptionFormComponent', () => {
  let component: SubscriptionFormComponent;
  let fixture: ComponentFixture<SubscriptionFormComponent>;
  let responsiveService: ResponsiveService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionFormComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        IonicModule.forRoot()
      ],
      providers: [
        {
          provide: ResponsiveService,
          useValue: { screenSize$: of('Mobile') }  // Mock the responsive service
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionFormComponent);
    component = fixture.componentInstance;
    responsiveService = TestBed.inject(ResponsiveService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with the correct structure', () => {
    const form = component.subscriptionForm;
    expect(form).toBeTruthy();
    expect(form.get('fullName')).toBeTruthy();
    expect(form.get('email')).toBeTruthy();
    expect(form.get('childName')).toBeTruthy();
    expect(form.get('childAge')).toBeTruthy();
    expect(form.get('childGrade')).toBeTruthy();
    expect(form.get('topics')).toBeTruthy();
  });

  it('should submit the form if valid', () => {
    // Set the form values to simulate a valid submission
    component.subscriptionForm.setValue({
      fullName: 'Mohamed Ahmed',
      email: 'mo.mamdouh.saad@gmail.com',
      childName: 'Child Name',
      childAge: { day: '12', month: '5', year: '2015' },
      childGrade: '3',
      topics: ['Arabic', 'Sports']
    });


    component.onSubmit();

    // Verify the form submission logic
    expect(console.log).toHaveBeenCalledWith(component.subscriptionForm.value);
  });

  it('should validate birth date correctly', () => {
    const childAge = component.subscriptionForm.get('childAge') as FormGroup;

    // Test with a valid date
    childAge.setValue({ day: '29', month: '2', year: '2020' });  // Leap year
    component.validateBirthDate();
    expect((childAge.get('date')as FormGroup).hasError('invalidDate')).toBeFalsy();

    // Test with an invalid date
    childAge.setValue({ day: '29', month: '2', year: '2021' });  // Not a leap year
    component.validateBirthDate();
    expect((childAge.get('date')as FormGroup).hasError('invalidDate')).toBeTruthy();

  });

  it('should add and remove topics in FormArray', () => {
    const topics: FormArray = component.subscriptionForm.get('topics') as FormArray;

    // Initially no topics should be selected
    expect(topics.length).toBe(0);

    // Simulate checkbox checked event
    component.onCheckboxChange({ target: { checked: true, value: 'Arabic' } });
    expect(topics.length).toBe(1);

    // Simulate checkbox unchecked event
    component.onCheckboxChange({ target: { checked: false, value: 'Arabic' } });
    expect(topics.length).toBe(0);
  });
});
