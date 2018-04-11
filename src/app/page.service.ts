import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PageService {

  constructor() { }

  // for app component to get correct title
  private pageTitleSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public getPageTitle() {
    return this.pageTitleSubject;
  }
  public setPageTitle(pageTitle: string) {
    this.pageTitleSubject.next(pageTitle);
  }

  // for all pages to know whether or not signed in
  private isSignedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public getIsSignedIn() {
    return this.isSignedInSubject;
  }
  public setIsSignedIn(isSignedIn: boolean) {
    this.isSignedInSubject.next(isSignedIn);
  }

  // for home component to get correct sign-in/sign-up form
  private isSignInFormSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public getIsSignInForm() {
    return this.isSignInFormSubject;
  }
  public setIsSignInForm(isSignInForm: boolean) {
    this.isSignInFormSubject.next(isSignInForm);
  }

}
