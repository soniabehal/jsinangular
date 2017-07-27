import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  public activeClassVar='active';

   toggleClass(index){
        if(index == 2){
            this.activeClassVar='hide';
        }else{
            this.activeClassVar='active';
        }
    }

  ngOnInit() {
  }

}
