import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../server.service';
import { PageService } from '../page.service';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageService: PageService,
    private serverService: ServerService
  ) { }

  // whether or not on sign in / sign up form
  public isSignInForm: boolean = true;
  // whether signed in or not
  public isSignedIn: boolean = false;
  // user details when signed in
  public userDetails: any = {};

  // get all variables
  ngOnInit() {
    this.pageService.setPageTitle('Home');
    // this.pageService.getIsSignInForm().subscribe(newIsSignInForm => this.isSignInForm = newIsSignInForm);
    this.pageService.getIsSignedIn().subscribe(newIsSignedIn => this.isSignedIn = newIsSignedIn);
    this.serverService.getUserDetails().subscribe(newUserDetails => {
      this.userDetails = newUserDetails
      this.changeField = null;
    });

    // switch forms if in url
    this.activatedRoute.data.subscribe(data => this.isSignInForm = data.isSignInForm);
  }

  // change a user detail
  public changeField: string = null;
  public changeFieldValue: string = '';
  public changeFieldPassword: string = '';
  public changeFieldCurrentPassword: string = '';

  // open up user detail change table
  // cancel edit by calling this with null
  public edit(field: string) {
    // reset values and errors
    this.changeFieldValue = '';
    this.changeFieldPassword = '';
    this.changeFieldCurrentPassword = '';
    this.errors = { };

    // update field to change (setting to null clears it)
    this.changeField = field;
  }

  // errors for changing user detail
  public errors: any = { };

  // submit edit
  @ViewChild('editModal') editModalElement: any;
  public submitEdit() {
    let data: any = {
      field: this.changeField,
      value: this.changeFieldValue,
      password: this.changeFieldCurrentPassword
    };
    if(this.changeField === 'password') {
      data.password2 = this.changeFieldPassword;
    }
    this.serverService.editUserField(data, res => {
      if(res === true) {
        // if successful, clear and hide
        this.edit(null);
        $(this.editModalElement.nativeElement).modal('hide');
      } else {
        this.errors = res;
      }
    });
  }

  // sign out button
  public signOut() {
    this.serverService.signOut(() => this.pageService.setIsSignedIn(false));
  }

}
