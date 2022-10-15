import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/person.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  people: User;
  form: FormGroup;
  mode: "New" | "Edit" = "New";
  @Input('user') set user(user: User) {
    if (user) {
      this.form.controls.id.setValue(user.id);
      this.form.controls.name.setValue(user.name);
      this.form.controls.nickname.setValue(user.nickname);
      // this.form.controls.picture.setValue(person.picture);
      this.mode = "Edit";
    }
  }
  constructor(private userSVC: PeopleService, private fb:FormBuilder, private modal:ModalController) {
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      nickname:['', [Validators.required]]
    })
  }
  ngOnInit() { }

  createUser(){
    console.log(this.form.value); //It is called when push the form button
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  onSubmit(){
    this.modal.dismiss({user: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  getPeople(): User[] {
    return this.userSVC.getPeople();
  }

}
