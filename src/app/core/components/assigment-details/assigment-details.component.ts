import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assignment } from '../../models/assignment.model';
import { PeopleService } from '../../services/people.service';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-assigment-details',
  templateUrl: './assigment-details.component.html',
  styleUrls: ['./assigment-details.component.scss'],
})
export class AssignmentDetailsComponent implements OnInit {

  form:FormGroup;
  mode: "New" | "Edit" = "New";

  

  @Input('assign') set assign(assign:Assignment){
    if(assign){
      this.form.controls.id.setValue(assign.id);
      this.form.controls.personId.setValue(assign.personId);
      this.form.controls.taskId.setValue(assign.taskId);
      this.form.controls.dateTime.setValue(assign.dateTime);
      this.mode = "Edit";
    }

  }
  constructor(private formBuilder:FormBuilder,
              private userSVC:PeopleService,
              private taskSVC:TasksService,
              private modal:ModalController
    ) {
    this.form = this.formBuilder.group({ 
      id:[0],
      personId:[0,Validators.min(1)],
      taskId:[0,Validators.min(1)],
      dateTime:["",Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit(){
    console.log(this.form.value)
      this.modal.dismiss({assign: this.form.value, mode: this.mode}, 'ok')
  }

  onDismiss(result){
    this.modal.dismiss(null,'cancel'); 
  }

  getPeople(){
    return this.userSVC.getPeople();
  }

  getTask(){
    return this.taskSVC.getTasks();
  }

  onChange(event){
    this.form.controls.dateTime.setValue(event.detail.value);
  }

}