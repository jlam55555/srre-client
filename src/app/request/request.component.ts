import { Component, OnInit, ViewChild } from '@angular/core';
import { PageService } from '../page.service';
import { ServerService } from '../server.service';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(private pageService: PageService, private serverService: ServerService) { }

  // for determining what to show on the page
  public isSignedIn: boolean = false;
  public mission: any = {};

  // form fields
  public requestLocation: string = '';

  // form field errors
  public errors: any = {};

  @ViewChild('addressMap') addressMapElement: any;
  public map: google.maps.Map;

  ngOnInit() {
    this.pageService.setPageTitle('Request');
    this.pageService.getIsSignedIn().subscribe(newIsSignedIn => this.isSignedIn = newIsSignedIn);
    this.serverService.getMissionData().subscribe(newMissionData => this.mission = newMissionData);
  }

  // update map when user leaves input box
  updateMap() {
    // coordinates for St. Patrick's Church
    var startLocation = new google.maps.LatLng(41.3072523, -73.3477574);

    // create map centered at St. Patrick's Church
    let mapProperties = {
      center: startLocation,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      type: [ 'street_address' ]
    };
    this.map = new google.maps.Map(this.addressMapElement.nativeElement, mapProperties);

    // find place
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: startLocation,
      radius: 25000,  // approximately 15 miles
      keyword: this.requestLocation
    }, (res, status) => {
      if(status === google.maps.places.PlacesServiceStatus.OK && res.length > 0) {
        var marker = new google.maps.Marker({
          position: res[0].geometry.location,
          map: this.map,
          title: res[0].name
        });
        this.errors.requestLocation = undefined;
      } else {
        this.errors.requestLocation = 'That address was not found.';
      }
    });
  }

  // submit when enter pressed
  submitOnEnter(event: KeyboardEvent) {

    if(event.which === 13) {
      // verify map
      this.updateMap();

      // other verifications and submit
    }

  }

}
