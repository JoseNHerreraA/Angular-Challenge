import { Component, OnInit } from '@angular/core';
import { Comics_services } from './services/comics_services';
import { Personajes_services } from './services/personajes_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void { }

}
