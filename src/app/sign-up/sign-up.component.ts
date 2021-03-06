import { Component, OnInit, ViewChild } from '@angular/core';
import { PageService } from '../page.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private pageService: PageService, private serverService: ServerService) { }
  ngOnInit() {
    this.signUpEmailElement.nativeElement.focus();

    // configure collapse indicators
    this.pageService.collapseIndicators();
  }

  // form fields
  public signUpEmail: string = '';
  public signUpPassword1: string = '';
  public signUpPassword2: string = '';
  public signUpName: string = '';
  public signUpPhone: string = '';
  public signUpSchool: string = '';
  public signUpAddress: string = '';
  public signUpVolunteerKey: string = '';

  // errors for validation
  public errors: any = {};

  // reference to sign up email element for autofocus
  @ViewChild('signUpEmailElement') signUpEmailElement: any;

  // attempt sign up
  public signUp() {
    var formData = {
      email: this.signUpEmail,
      password1: this.signUpPassword1,
      password2: this.signUpPassword2,
      name: this.signUpName,
      phone: this.signUpPhone,
      school: this.signUpSchool,
      address: this.signUpAddress,
      volunteerKey: this.signUpVolunteerKey
    };
    this.serverService.signUp(formData, res => {
      // if successful, change views
      if(res === true) {
        this.pageService.setIsSignedIn(true);
        // change url in case current url is /signin
        history.pushState('page2', 'SafeRides', '/');
      // if not successful, display errors
      } else {
        this.errors = res;
        // clear password
        this.signUpPassword1 = '';
        this.signUpPassword2 = '';
      }
    });
  }

  // attempt sign up when enter pressed on input
  public submitOnEnter(event: KeyboardEvent) {
    if(event.which === 13) {
      this.signUp();
    }
  }
}
