import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  lat: number = -17.3937853;
  lng: number = -66.1481668;
  zoom: number = 17;

  markers: marker[] = [
	  { // config -17.3937853,-66.1481668 Feria
		  lat: -17.3937853,
		  lng: -66.1481668,
		  label: 'F',
	  },
	  {//-17.3939935,-66.149347 Puerta principal
		  lat: -17.3939935,
		  lng: -66.149347,
		  label: 'A', 
	  },
	  {//-17.3926495,-66.1468436 Parqueo FCyT
		  lat: -17.3926495,
		  lng: -66.1468436,
		  label: 'P',
	  }
  ];

  options: {scrollwheel: false}
  
  constructor() { }

  ngOnInit() {
  }

}


interface marker {
	lat: number;
	lng: number;
	label?: string;
}