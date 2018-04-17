import { Component, OnInit, ViewChild } from '@angular/core';
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
    // get mission data
    this.serverService.getMissionData().subscribe(missionData => this.mission = missionData);

    // get mission message data
    this.serverService.getMessages().subscribe(newMessages => {
      this.messages = newMessages;

      // scroll to bottom of messages
      this.missionMessagesElement.nativeElement.scrollTop = 10000;
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

  // get messages
  public messages: any = [ ];

  // mission message input string
  public missionMessage: string = '';

  // list of messages (programatically scroll to bottom)
  @ViewChild('missionMessages') missionMessagesElement: any;

  // send message
  sendMessage() {
    let data = { content: this.missionMessage };
    this.serverService.sendMessage(data, res => {
      if(res === true) {
        this.missionMessage = '';
      } else {
        this.errors = res;
      }
    });
  }

  // send message when enter pressed
  submitOnEnter(event: KeyboardEvent) {
    if(event.which === 13) {
      this.sendMessage();
    }
  }

}
