// src/app/shared/core/responsive-base.component.ts
import { OnInit, OnDestroy, Component, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeviceType } from '../enum/device-type.enum';
import { ResponsiveService } from 'src/app/core/services/responsive.service';


@Component({
  template:''
})

export abstract class ResponsiveBaseComponent implements OnInit, OnDestroy {
  deviceType: DeviceType = DeviceType.Mobile; // Default value is Mobile
  screenSizeSubscription: Subscription | undefined;

  constructor(public responsiveService: ResponsiveService) {}
  ngOnInit(): void {
    // Subscribe to the screen size observable
    this.screenSizeSubscription = this.responsiveService.getScreenSize().subscribe((size) => {
      this.updateDeviceProperties(size);
    });
  }

  ngOnDestroy(): void {
    if (this.screenSizeSubscription) {
      this.screenSizeSubscription.unsubscribe();
    }
  }

  private updateDeviceProperties(size: DeviceType): void {
    this.deviceType = size;
  }



  public set isMobile(v : DeviceType) {
    this.deviceType = v;
  }

  get isMobile(): boolean {
    return this.deviceType === DeviceType.Mobile;
  }


  get isTablet(): boolean {
    return this.deviceType === DeviceType.Tablet;
  }

  get isDesktop(): boolean {
    return this.deviceType === DeviceType.Desktop;
  }

  get isLargeScreen(): boolean {
    return this.deviceType === DeviceType.LargeScreen;
  }
}
