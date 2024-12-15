// src/app/shared/services/responsive.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DeviceType } from 'src/app/shared/enum/device-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private screenSizeSubject = new BehaviorSubject<DeviceType>(DeviceType.Mobile); // Default is Mobile
  screenSize$: Observable<DeviceType> = this.screenSizeSubject.asObservable();

  constructor() {
    this.detectScreenSize();
  }

  private detectScreenSize(): void {
    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize(); // Call immediately to set initial value
  }

  private onResize(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.screenSizeSubject.next(DeviceType.Mobile);
    } else if (width >= 768 && width < 1024) {
      this.screenSizeSubject.next(DeviceType.Tablet);
    } else if (width >= 1024 && width < 1200) {
      this.screenSizeSubject.next(DeviceType.Desktop);
    } else {
      this.screenSizeSubject.next(DeviceType.LargeScreen);
    }
  }

  getScreenSize(): Observable<DeviceType> {
    return this.screenSize$;
  }
}
