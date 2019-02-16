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
  //@TODO Abhinav add what you want
  riskZones = [
    {lat: 43.651492, lng: -79.405834},
    {lat: 43.663038, lng: -79.410632},
    {lat: 43.664456, lng: -79.384590},
    {lat: 43.662129, lng: -79.380147}
  ];

  safeZones = [
    {lat: 43.657758, lng: -79.402242},
  ];

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

    this.infoWindow.setPosition({
      lat: this.lat,
      lng: this.lng
    });
    this.infoWindow.setContent('This your current location');
    this.infoWindow.open(map);

    this.service = new google.maps.places.PlacesService(map);

    //Search for parks
    this.service.nearbySearch({
      location: {
        lat: this.lat,
        lng: this.lng
      },
      radius: 2500,
      type: 'park'
    }, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          //@TODO will softcode later
          //createMarker(results[i]);
        }
      }
    });

    //Search for pharmacies
    this.service.nearbySearch({
      location: {
        lat: this.lat,
        lng: this.lng
      },
      radius: 2500,
      type: 'pharmacy'
    }, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    });

    function createMarker(loc) {
      let marker = new google.maps.Marker({
        map: map,
        position: loc.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function () {
        self.infoWindow.setContent('<div><strong>' + loc.name + '</strong><br>' +
          'Located at ' + loc.vicinity //@TODO Abhinav
          + '</div>');
        self.infoWindow.open(map, this);
      });
    }
  }

  setPosition(event = undefined) {
    let self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;
        self.mapReady(event);
      });
    }
  }
}
