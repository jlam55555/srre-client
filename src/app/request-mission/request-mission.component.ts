import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-request-mission',
  templateUrl: './request-mission.component.html',
  styleUrls: ['./request-mission.component.scss']
})
export class RequestMissionComponent implements OnInit {

  constructor(private pageService: PageService, private serverService: ServerService) { }

  // mission data
  public mission: any = {};

  // error data
  public errors: any = {};

  ngOnInit() {
    this.serverService.getMissionData().subscribe(missionData => {
      // set mission to mission data
      this.mission = missionData;
    });

    // configure card  collapse indicators
    this.pageService.collapseIndicators();
  }

  // advance waypoint
  completeCheckpoint() {
    let data = { nextId: this.mission.nextId };
    this.serverService.completeCheckpoint(data, res => {
      if(res !== true) {
        this.errors = res;
      }
    });
  }

}