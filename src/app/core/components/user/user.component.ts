import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core/models/person.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() userInput: User;

  constructor() { }

  ngOnInit() {}


  onEditClick(){
    this.onEdit.emit(this.userInput);
  }

  onDeleteClick(){
    this.onDelete.emit(this.userInput);
  }
}