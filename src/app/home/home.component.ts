import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../server.service';
import { PageService } from '../page.service';

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
    this.serverService.getUserDetails().subscribe(newUserDetails => this.userDetails = newUserDetails);

    // switch forms if in url
    this.activatedRoute.data.subscribe(data => this.isSignInForm = data.isSignInForm);
  }

  // sign out button
  public signOut() {
    this.serverService.signOut(() => this.pageService.setIsSignedIn(false));
  }

}
