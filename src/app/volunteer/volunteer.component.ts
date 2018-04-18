import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../page.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  constructor(private pageService: PageService, private serverService: ServerService, private router: Router) { }

  // to determine whether or not you can see this content
  // both need to be true
  public isSignedIn: boolean = false;
  public isVolunteer: boolean = false;

  // volunteer team
  public volunteerTeam: string = '';

  // mission list
  public missions: any = { onDuty: [], offDuty: [] };

  // errors
  public errors: any = { };

  // show duty dates
  public teamData: any = { dates: [] };

  ngOnInit() {
    this.pageService.setPageTitle('Volunteer');
    this.pageService.getIsSignedIn().subscribe(newIsSignedIn => this.isSignedIn = newIsSignedIn);
    this.serverService.getUserDetails().subscribe(newUserDetails => {
      this.volunteerTeam = newUserDetails.team;
      this.isVolunteer = newUserDetails.team !== null;
      this.pageService.initCollapseIndicators();
    });
    this.serverService.getMissionListData().subscribe(newMissionListData => this.missions = newMissionListData);

    // get duty dates -- static data
    this.serverService.getDutyDates(res => {
      // this doesn't have error reporting because it theoretically shouldn't go wrong
      if(res !== false) {
        this.teamData = res;
      }
    });

    // configure card chevron indicators
    this.pageService.collapseIndicators();
  }

  // volunteer
  public volunteer(missionId: number) {
    let data = { missionId: missionId };
    this.serverService.volunteer(data, res => {
      if(res === true) {
        this.router.navigateByUrl('/request');
      } else {
        this.errors = res;
      }
    });
  }

}
