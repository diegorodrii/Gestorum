import { Injectable } from '@angular/core';
import { User } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public _people: User[] = [
  {
    id:1,
    name:'Diego',
    nickname:'Aguilera',
    image:'https://drive.google.com/uc?export=view&id=1BHdTeQoWC1MsI_UlT0Z_Hb0mNyNpdYf5'
  },
  {
    id:2,
    name:'Alberto',
    nickname:'Parra',
    image:'https://drive.google.com/uc?export=view&id=1p_7irDllBxDp-PGoUWPnpEKudQNewZPL'
  },
  {
    id:3,
    name:'Gabriela',
    nickname:'Gaby',
    image:'https://drive.google.com/uc?export=view&id=12EdF_gRoVzOBdbOiYU7SuwsCkGhud8He'
  },
  {
    id:4,
    name:'Alvaro',
    nickname:'Alvaroski',
    image:'https://drive.google.com/uc?export=view&id=1mb2oDNf4giw3C_jInMS3tGwP_WCupWF2'
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
