import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { TaskDetailComponent } from 'src/app/components/task-detail/task-detail.component';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks: Task;
  form: FormGroup;

  constructor(private taskService: TasksService,
    private fb: FormBuilder,
    private modal: ModalController,
    private alert: AlertController
  ) {
    this.form = this.fb.group({
      taskName: '',
      taskDescription: '',
      taskDifficulty: ''
    });
  }

  ngOnInit() {
  }
  createTask() {
    console.log(this.form.value); //It is called when push the form button
  }



  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }


  getTasks() {
    return this.taskService.getTasks();
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

  onDeleteTask(task) {
    this.onDeleteAlert(task);

  }

}


