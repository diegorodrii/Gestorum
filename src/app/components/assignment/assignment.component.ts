import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { User } from 'src/app/models/person.model';
import { PeopleService } from 'src/app/services/people.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {

  @Input() assign : Assignment; 

  constructor(private userSVC: PeopleService, private taskService: TasksService) { }


  ngOnInit() { }

  getUserSVC(id:number){
    return this.userSVC.getPeopleById(id);
  }
  getTaskService(id:number){
    return this.taskService.getTasksById(id);
  }

}
