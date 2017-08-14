import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'AUSCESS';

  materializeParams = [{
    menuWidth: 250,
    edge: 'left',
    closeOnClick: true,
    draggable: true
  }]

  constructor() { }

  ngOnInit() {
  }

}
