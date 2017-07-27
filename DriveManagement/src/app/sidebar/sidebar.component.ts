import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sidebar=[
    { "name":"Dashboard","Link":"glyphicon glyphicon-home"},
    { "name":"University Profile","Link":"glyphicon glyphicon-home"},
    { "name":"Drive Management","Link":"glyphicon glyphicon-th-list"},
    { "name":"Companies","Link":"glyphicon glyphicon-home"},
    { "name":"Students","Link":"glyphicon glyphicon-education"},
    { "name":"Manage Users","Link":"glyphicon glyphicon-user"},
    { "name":"Tasks","Link":"glyphicon glyphicon-th-list"},
    { "name":"Announcements","Link":"glyphicon glyphicon-home"},
    { "name":"Reports","Link":"glyphicon glyphicon-home"}

  ]
}
