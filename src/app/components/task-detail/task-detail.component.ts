import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {

  tasks: Task;
  form:FormGroup;
  mode: "New" | "Edit" = "New";
  @Input ('task') set task(task:Task){
    if(task){
      this.form.controls.id.setValue(task.id);
      this.form.controls.taskName.setValue(task.taskName);
      this.form.controls.taskDescription.setValue(task.taskDescription);
      this.form.controls.taskDifficulty.setValue(task.taskDifficulty);

      this.mode = "Edit";
    }
  }
  constructor() { }

  ngOnInit() {}

}
