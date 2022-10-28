import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assign : Assignment; 

  constructor(private userSVC: PeopleService, private taskService: TasksService) { }


  ngOnInit() { }

  getUserSVC(id:number){
    return this.userSVC.getPeopleById(id);
  }
  getTaskService(id:number){
    return this.taskService.getTasksById(id);
  }
  onEditClick(){
    this.onEdit.emit(this.assign);
  }
  onDeleteClick(){
    this.onDelete.emit(this.assign);
  }

}
