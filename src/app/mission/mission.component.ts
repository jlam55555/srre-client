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
    this.serverService.getMissionData().subscribe(missionData => this.mission = missionData);

    // configure card  collapse indicators
    this.pageService.collapseIndicators();
  }

}
