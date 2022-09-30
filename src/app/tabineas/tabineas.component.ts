import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabineas-section',
  templateUrl: './tabineas.component.html',
  styleUrls: ['./tabineas.component.css']
})
export class TabsSectionComponent implements OnInit {
  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;

  constructor() { }

  ngOnInit() {
  }

}