import { Injectable } from '@angular/core';
import { User } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public _people: User[] = [
  {
    id:0,
    name:'Diego',
    nickname:'Rodri',
    image:''
  },
  {
    id:1,
    name:'Alberto',
    nickname:'Parra',
    image:''
  },
  {
    id:2,
    name:'Gabriela',
    nickname:'Gaby',
    image:''
  },
  {
    id:3,
    name:'Alvaro',
    nickname:'Alvaroski',
    image:''
  }

  ]

  id:number = this._people.length+1;

  constructor() { }

  public getPeople(): User[] {
    return this._people;
  }

  public getPeopleById(id: number): User{
    return this._people[id];
  }

  addUser(user:User){
    user.id = this.id++;
    this._people.push(user);
  }

  updateUser(user:User){
    var _user = this._people.find(p=>p.id==user.id);
    if(_user){
      _user.name = user.name;
      _user.nickname = user.nickname;
    }
    
  }

  deleteUserById(id:number){
    this._people = this._people.filter(p=>p.id != id); 
  }
}
