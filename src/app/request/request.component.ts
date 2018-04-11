import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(private pageService: PageService, private serverService: ServerService) { }

  public isSignedIn: boolean = false;
  public mission: any = {};

  ngOnInit() {
    this.pageService.setPageTitle('Request');
    this.pageService.getIsSignedIn().subscribe(newIsSignedIn => this.isSignedIn = newIsSignedIn);
    this.serverService.getMissionData().subscribe(newMissionData => this.mission = newMissionData);
  }

}
