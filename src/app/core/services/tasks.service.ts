import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public _tasks: Task[] = [
  {
    id:1,
    taskName:'Crear página web',
    taskDescription:'Es importante una web para la app para llegar al máximo de clientes posibles',
    taskDifficulty:'Alta',
    taskSeconds: 23000,
    taskImage:'https://drive.google.com/uc?export=view&id=12ER9uCvjon9-eF_kM7yZckFtdIG79ZTn'


  },
  {
    id:2,
    taskName:'Solucionar fallos de la app',
    taskDescription:'Diferentes fallos en la pasarela de compra',
    taskDifficulty:'Muy alta',
    taskSeconds: 21000,
    taskImage:'https://drive.google.com/uc?export=view&id=1SA3Xf6m2Bnvyvu4iAkWlgBuVXXovjDVg'

  },
  {
    id:3,
    taskName:'Contactar con los usuarios de paquetes no insertados',
    taskDescription:'Varios paquetes no han entrado bien a la base de datos y hay que comunicarselo a los clientes afectados',
    taskDifficulty:'Baja',
    taskSeconds: 20008,
    taskImage:'https://drive.google.com/uc?export=view&id=1WRDjY0JzvaiZ1q3rChYemCEJueSZ9_CN'


  },
  {
    id:4,
    taskName:'Arreglar ordenador mesa 3',
    taskDescription:'Fallos de refrigeración de la máquina',
    taskDifficulty:'Media',
    taskSeconds: 72000,
    taskImage:'https://drive.google.com/uc?export=view&id=1kulpA7ZyuRL1eXIXdk5qEkkzy2Dxwp8V'


  }

  ]
  private tasksSubject:BehaviorSubject<Task[]> = new BehaviorSubject(this._tasks);
  public task$ = this.tasksSubject.asObservable();
  
  id:number = this._tasks.length+1;

  constructor() { }

  public getTasks(): Task[] {
    return this._tasks;
  }

  public getTasksById(id: number){
    return this._tasks.find(p=>p.id==id);
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
