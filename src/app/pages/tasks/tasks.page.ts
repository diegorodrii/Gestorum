import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { AssignmentsService } from 'src/app/core';
import { TaskDetailComponent } from 'src/app/core/components/task-detail/task-detail.component';
import { Task } from 'src/app/core/models/task.model';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks: Task;


  constructor(private taskService: TasksService,
    private fb: FormBuilder,
    private modal: ModalController,
    private alert: AlertController,
    private assignService: AssignmentsService
  ) {

  }

  ngOnInit() {
  }




  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }


  getTasks() {
    return this.taskService.task$;
  }

  async presentTaskForm(task: Task) {
    const modal = await this.modal.create({
      component: TaskDetailComponent,
      componentProps: {
        task: task
      }
    });

    modal.present();
    modal.onDidDismiss().then(result => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.taskService.addTask(result.data.task);
            break;
          case 'Edit':
            this.taskService.updateTask(result.data.task);
            break;
          default:
        }
      }
    });


  }

  onNewTask() {
    this.presentTaskForm(null);
  }

  onEditTask(task) {
    this.presentTaskForm(task);
  }

  async onDeleteAlert(task) {
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar la tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.taskService.deleteTaskById(task.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  async onTaskExistsAlert(task) {
    const alert = await this.alert.create({
      header: 'Error',
      message: 'No es posible borrar la tarea porque está asignada a un usuario',
      buttons: [
        {
          text: 'Cerrar',
          role: 'close',
          handler: () => {
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteTask(task){
    if(!this.assignService.getAssignmentsById(task.id))
      this.onDeleteAlert(task);
    else
      this.onTaskExistsAlert(task);
    
  }

}


