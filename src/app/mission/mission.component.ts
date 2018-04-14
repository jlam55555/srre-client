import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  constructor(private pageService: PageService, private serverService: ServerService) { }

  // mission data
  public mission: any = {};

  ngOnInit() {
    this.serverService.getMissionData().subscribe(missionData => {

      // make waypoints into array
      missionData.w = [
        {
          time: missionData.w0,
          next: false,
          isConfirmRole: true,
          place: missionData.meetingplace,
          text: `${missionData.driver1} and ${missionData.driver2} have left the starting place.`
        },
        {
          time: missionData.w1,
          next: false,
          isConfirmRole: true,
          place: missionData.startplace,
          text: `${missionData.drivee} has been picked up.`
        },
        {
          time: missionData.w2,
          next: false,
          isConfirmRole: false,
          place: missionData.endplace,
          text: `${missionData.drivee} has been dropped off at his/her home.`
        },
        {
          time: missionData.w3,
          next: false,
          isConfirmRole: false,
          place: missionData.meetingplace,
          text: `${missionData.driver1} and ${missionData.driver2} have returned to the starting place.`
        }
      ];

      // set next element
      let nextId;
      if(missionData.w0 === null) nextId = 0;
      else if(missionData.w1 === null) nextId = 1;
      else if(missionData.w2 === null) nextId = 2;
      else nextId = 3;
      missionData.nextId = nextId;
      missionData.w[nextId].next = true;

      // set mission to mission data
      this.mission = missionData;
    });

    // configure card  collapse indicators
    this.pageService.collapseIndicators();
  }

}
