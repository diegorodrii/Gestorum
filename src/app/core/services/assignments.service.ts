import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private moment:any = moment;
 
  private _assignments: Assignment[] = [
    {
      id: 1,
      personId: 1,
      taskId: 1,
      dateTime:this.moment().add(1,'days').toLocaleString(),
      createdAt:this.moment().toLocaleString()
    },
    {
      id: 2,
      personId: 2,
      taskId: 2,
      createdAt: "2022-10-20 T10:50",
      dateTime: "2022-10-25 T20:40"
    },
    {
      id: 3,
      personId: 3,
      taskId: 3,
      createdAt: "2022-10-20 T11:15",
      dateTime: "2022-10-29 T17:40"
    }

  ]
  id: number = this._assignments.length + 1;
  getAssignments() {
    return this._assignments;
  }

  getAssignmentsById(id: number): Assignment {
    return this._assignments[id];
  }

  addAssignment(assignment: Assignment) {
    assignment.id = this.id++;
    this._assignments.push(assignment);
  }
  constructor() { }
  updateAssignment(assignment: Assignment) {
    var assignment = this._assignments.find(p => p.id == assignment.id);

    if (assignment) {
      assignment.personId = assignment.personId;
      assignment.taskId = assignment.taskId;
      assignment.dateTime = assignment.dateTime;

    }
  }

  deleteAssignmentById(id: number) {
    this._assignments = this._assignments.filter(p => p.id != id);
  }
}
