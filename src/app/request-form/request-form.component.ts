import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  // update map on start
  ngOnInit() {
    this.updateMap();
  }

  // form fields
  public requestLocation: string = '';
  public requestMessage: string = '';

  // form field errors
  public errors: any = {};

  @ViewChild('addressMap') addressMapElement: any;
  public map: google.maps.Map;

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

    // find place; client-side validation before server for convenience, will be repeated by server
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: startLocation,
      radius: 25000,  // approximately 15 miles
      keyword: this.requestLocation
    }, (res, status) => {
      if(status === google.maps.places.PlacesServiceStatus.OK && res.length > 0) {
        let marker = new google.maps.Marker({
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

  // request a ride
  request() {
    let requestData = {
      location: this.requestLocation,
      message: this.requestMessage
    };
    this.serverService.request(requestData, res => {
      if(res === true) {
        // don't have to do anything, should automatically update to mission screen
      } else {
        this.errors = res;
      }
    });
  }

  // submit when enter pressed
  submitOnEnter(event: KeyboardEvent) {
    if(event.which === 13) {
      // update map
      this.updateMap();
      // request
      this.request();
    }
  }

}
