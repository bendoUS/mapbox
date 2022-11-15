import { environment } from '../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: any = mapboxgl.Map;
  style = 'mapbox://styles/selom/clafq1x9q00ch15n7e0b0wq0z';
  lat = 35;
  lng = 0;

  

  constructor() { }

  ngOnInit(): void {

    const coordinates: any = document.getElementById('coordinates');

    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 2,
      center: [this.lng, this.lat],
      projection: { name: 'mercator' }
    });
    this.loadMap()

    const marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([0, 0])
      .addTo(this.map);
       
      function onDragEnd() {
      const lngLat = marker.getLngLat();
      coordinates.style.display = 'block';
      coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
      }
       
      marker.on('dragend', onDragEnd);
  }


  loadMap() {

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    let geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            long: -77.032,
            lat: 38.913
          },
          properties: {
            title: 'Web3 Dev',
            description: 'Washington, D.C.'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            long: -122.414,
            lat: 37.776
          },
          properties: {
            title: 'Ecom',
            description: 'San Francisco, California'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            long: -96.9225,
            lat: 44.3239
          },
          properties: {
            title: 'Crypto Trader',
            description: 'South Dakota'
          }
        }
      ]
    };

    // add markers to map
    for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat([feature.geometry.long, feature.geometry.lat]).addTo(this.map);


      new mapboxgl.Marker(el)
        .setLngLat([feature.geometry.long, feature.geometry.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25, closeButton: false }) // add popups
            .setHTML(
              `<h3>${feature.properties.title}</h3><a class="userClass" href="#">${feature.properties.description}</a>`
            )
        )
        .addTo(this.map);

    }



    


  }

  getPosition() {

    

  }

}
