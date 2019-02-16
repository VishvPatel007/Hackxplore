import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {
  lat: number = 0;
  lng: number = 0;
  zoom: number = 14;

  infoWindow: any;
  service: any;

  constructor() { }

  ngOnInit() {
  }

  /**
   * takes a google maps map object and renders car repair locations on it
   * @param map --> The map object to render locations on
   */
  mapReady(map: any) {
    let self = this;
    this.infoWindow = new google.maps.InfoWindow();
    //Set position to the position found on init
    this.infoWindow.setPosition({
      lat: this.lat,
      lng: this.lng
    });
    this.infoWindow.setContent('You are here!');
    this.infoWindow.open(map);

    this.service = new google.maps.places.PlacesService(map);
    //Search for places nearby with a certain radius.
    this.service.nearbySearch({
      location: {
        lat: this.lat,
        lng: this.lng
      }, 
      radius: 2500,
      type: 'cafe'
    }, function (results, status) {
      //Create markers and a list column based on results from nearby search
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    });

    /**
     * Creates a marker to show on the maps object for a location
     * @param place --> The location to place the marker
     */
    function createMarker(place) {
      let marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function () {
        self.infoWindow.setContent('<div><strong>' + place.name + '</strong><br>' +
          'Located at ' + place.vicinity //place.formatted_address
          + '</div>');
        self.infoWindow.open(map, this);
      });
    }
  }

  /**
   * Uses the geolocation API to set the users current posistion
   */
  setCurrentPosition(e = undefined) {
    console.log("call set");

    let self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;

        if (e)
          self.mapReady(e);
      });
    } else {
      if (e)
        self.mapReady(e);
    }
  }

}
