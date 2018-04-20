import { Component, OnInit, ViewChild } from '@angular/core';
import { PageService } from '../page.service';
import { ServerService } from '../server.service';
import { } from '@types/googlemaps';
declare let $: any;

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
    this.serverService.getMissionData().subscribe(missionData => {
      this.mission = missionData;
      this.pageService.initCollapseIndicators();
    });

    // get mission message data
    this.serverService.getMessages().subscribe(newMessages => {
      this.messages = newMessages;

      // scroll to bottom of messages
      this.missionMessagesElement.nativeElement.scrollTop = 10000;
      setTimeout(() => this.missionMessagesElement.nativeElement.scrollTop = 10000, 50);
    });

    // open map
    this.initMap();
    $(document).on('shown.bs.collapse', () => this.resizeMap());

    // configure card collapse indicators
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

  // create map map
  @ViewChild('directionsMap') directionsMapElement: any;
  public map: google.maps.Map;
  private bounds: google.maps.LatLngBounds = new google.maps.LatLngBounds();
  initMap() {

    // coordinates for St. Patrick's Church
    var startLocation = new google.maps.LatLng(41.3072523, -73.3477574);

    // create map centered at St. Patrick's Church
    let mapProperties = {
      center: startLocation,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      type: [ 'street_address' ]
    };
    this.map = new google.maps.Map(this.directionsMapElement.nativeElement, mapProperties);

    // find places, mark on map
    let service = new google.maps.places.PlacesService(this.map);
    let markers: google.maps.Marker[] = [];
    let searchPlaceCallback = (res, status) => {
      new google.maps.Marker({
        position: res[0].geometry.location,
        map: this.map,
        title: res[0].name,
        label: res[0].name
      });
      this.bounds.extend(res[0].geometry.location);
    };
    let placeNames = [ this.mission.startplace, this.mission.endplace, this.mission.meetingplace ];
    for(let placeName of placeNames) {
      service.nearbySearch({
        location: startLocation,
        radius: 25000,  // approximately 15 miles
        keyword: placeName
      }, searchPlaceCallback);
    }
  }

  // update  after resize
  resizeMap() {
    this.map.fitBounds(this.bounds);
    this.map.setCenter(this.bounds.getCenter());
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
