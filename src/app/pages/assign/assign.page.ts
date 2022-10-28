import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/core/services/assignments.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.page.html',
  styleUrls: ['./assign.page.scss'],
})
export class AssignPage implements OnInit {
  
  constructor(private assignmentService : AssignmentsService) { }

  ngOnInit() {
  }


  getAssignments(){
   return this.assignmentService.getAssignments();
  }
}
