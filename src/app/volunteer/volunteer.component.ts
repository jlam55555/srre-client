import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  constructor(private pageService: PageService, private serverService: ServerService) { }

  // to determine whether or not you can see this content
  // both need to be true
  public isSignedIn: boolean = false;
  public isVolunteer: boolean = false;
  public volunteerTeam: string = '';

  ngOnInit() {
    this.pageService.setPageTitle('Volunteer');
    this.pageService.getIsSignedIn().subscribe(newIsSignedIn => this.isSignedIn = newIsSignedIn);
    this.serverService.getUserDetails().subscribe(newUserDetails => {
      this.volunteerTeam = newUserDetails.team;
      this.isVolunteer = newUserDetails.team !== null;
    });
  }

}
