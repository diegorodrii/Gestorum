import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { PeopleService, User } from '../..';


export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UserSelectableComponent),
  multi: true
};


@Component({
  selector: 'app-user-selectable',
  templateUrl: './user-selectable.component.html',
  styleUrls: ['./user-selectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class UserSelectableComponent implements OnInit, ControlValueAccessor {

  selectedUser:User=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private UserSVC:PeopleService
  ) { }


  writeValue(obj: any): void {
    console.log(this.UserSVC.getPeopleById(obj).image);
    this.selectedUser = this.UserSVC.getPeopleById(obj);
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

  getPeople(){
    return this.UserSVC.getPeople();
  } 

  onUserClicked(user:User, accordion:IonAccordionGroup){
    console.log(user);
    this.selectedUser = user;
    accordion.value='';
    this.propagateChange(this.selectedUser.id);
  }

}