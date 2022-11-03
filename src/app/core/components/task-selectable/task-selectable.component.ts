import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Task, TasksService,  } from '../..';


export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TaskSelectableComponent),
  multi: true
};


@Component({
  selector: 'app-task-selectable',
  templateUrl: './task-selectable.component.html',
  styleUrls: ['./task-selectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class TaskSelectableComponent implements OnInit, ControlValueAccessor {

  selectedTask:Task=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private TaskSVC:TasksService
  ) { }


  writeValue(obj: any): void {
    console.log(this.TaskSVC.getTasksById(obj).taskImage);
    this.selectedTask = this.TaskSVC.getTasksById(obj);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getTasks(){
    return this.TaskSVC.getTasks();
  } 

  onTaskClicked(task:Task, accordion:IonAccordionGroup){
    console.log(task);
    this.selectedTask = task;
    accordion.value='';
    this.propagateChange(this.selectedTask.id);
  }

}