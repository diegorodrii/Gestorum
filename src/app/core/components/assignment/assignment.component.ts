import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from 'src/app/core/models/assignment.model';
import { User } from 'src/app/core/models/person.model';
import { PeopleService } from 'src/app/core/services/people.service';
import { TasksService } from 'src/app/core/services/tasks.service';

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
