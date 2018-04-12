import { Component, OnInit, ViewChild } from '@angular/core';
import { PageService } from '../page.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private pageService: PageService, private serverService: ServerService) { }
  ngOnInit() {
    this.signInEmailElement.nativeElement.focus();
  }

  // form fields
  public signInEmail: string = '';
  public signInPassword: string = '';
  public userDetails: string = '';

  // errors for form validation
  public errors: any = {};

  // sign in email element reference for
  @ViewChild('signInEmailElement') signInEmailElement: any;

  // attempt sign in
  public signIn() {
    var formData = {
      email: this.signInEmail,
      password: this.signInPassword
    };
    this.serverService.signIn(formData, res => {
      // if successful, change views
      if(res === true) {
        this.pageService.setIsSignedIn(true);
        // change url in case current url is /signin
        history.pushState('page2', 'SafeRides', '/');
      // if not successful, display errors
      } else {
        this.errors = res;
        // clear password
        this.signInPassword = '';
      }
    });
  }

  // attempt sign in when enter pressed on input
  public submitOnEnter(event: KeyboardEvent) {
    if(event.which === 13) {
      this.signIn();
    }
  }

}
