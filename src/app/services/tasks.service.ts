import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public _tasks: Task[] = [
  {
    id:0,
    taskName:'Crear página web',
    taskDescription:'Es importante una web para la app para llegar al máximo de clientes posibles',
    taskDifficulty:'Alta'
  },
  {
    id:1,
    taskName:'Solucionar fallos de la app',
    taskDescription:'Diferentes fallos en la pasarela de compra',
    taskDifficulty:'Muy alta'
  },
  {
    id:2,
    taskName:'Contactar con los usuarios de paquetes no insertados',
    taskDescription:'Varios paquetes no han entrado bien a la base de datos y hay que comunicarselo a los clientes afectados',
    taskDifficulty:'Baja'
  },
  {
    id:3,
    taskName:'Arreglar ordenador mesa 3',
    taskDescription:'Fallos de refrigeración de la máquina',
    taskDifficulty:'Media'
  }

  ]

  id:number = this._tasks.length+1;

  constructor() { }

  public getTasks(): Task[] {
    return this._tasks;
  }

  public getTasksById(id: number): Task{
    return this._tasks[id];
  }

  addTask(task:Task){
    task.id = this.id++;
    this._tasks.push(task);
  }

  updateTask(task:Task){
    var _task = this._tasks.find(p=>p.id==task.id);
    if(_task){
      _task.taskName = task.taskName;
      _task.taskDescription = task.taskDescription;
      _task.taskDifficulty = task.taskDifficulty;
    }
    
  }

  deleteTaskById(id:number){
    this._tasks = this._tasks.filter(p=>p.id != id); 
  }
}
