import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriptionStepComponent } from './subscriptionStep.component';
import { ResponsiveService } from 'src/app/core/services/responsive.service';
import { StepModel } from '../../models/step.model';
import { of } from 'rxjs';

describe('SubscriptionStepComponent', () => {
  let component: SubscriptionStepComponent;
  let fixture: ComponentFixture<SubscriptionStepComponent>;
  let responsiveService: ResponsiveService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionStepComponent],
      providers: [
        {
          provide: ResponsiveService,
          useValue: { screenSize$: of('Mobile') }  // Mock the responsive service
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionStepComponent);
    component = fixture.componentInstance;
    responsiveService = TestBed.inject(ResponsiveService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should accept the input step', () => {
    const step: StepModel = { stepNO: 'stepNo 1', title: 'Step 1', description: 'This is the first step',imgSrc:'assets/images/test.svg' };

    component.step = step;
    fixture.detectChanges();

    expect(component.step).toEqual(step); // Ensure that the input is passed correctly
  });

  it('should interact with the ResponsiveService', () => {
    spyOn(responsiveService, 'getScreenSize').and.callThrough(); // Spy on the service method

    // Call a method to verify that the responsive service is being used
    component.ngOnInit();

    expect(responsiveService.getScreenSize).toHaveBeenCalled(); // Ensure service method is called
  });
});
