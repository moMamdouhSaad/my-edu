import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);

  constructor() {
    this.listenToScreenResize();
  }

  private listenToScreenResize() {
    window.addEventListener('resize', () => {
      this.screenWidth.next(window.innerWidth);
    });
  }

  getScreenWidth() {
    return this.screenWidth.asObservable();
  }

  isMobile(): boolean {
    return window.innerWidth < 768;
  }

  isTablet(): boolean {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  }

  isDesktop(): boolean {
    return window.innerWidth >= 1024;
  }
}
