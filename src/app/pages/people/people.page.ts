import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { UserDetailComponent } from 'src/app/core/components/user-detail/user-detail.component';
import { User } from 'src/app/core/models/person.model';
import { PeopleService } from 'src/app/core/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: User;
  form: FormGroup;
  constructor(private userService: PeopleService,
    private fb: FormBuilder,
    private modal: ModalController,
    private alert: AlertController) {
    this.form = this.fb.group({
      name: '',
      nickname: ''
    });
  }

  createUser() {
    console.log(this.form.value); //It is called when push the form button
  }


  ngOnInit() {
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }


  getPeople() {
    return this.userService.getPeople();
  }

  async presentUserForm(user: User) {
    const modal = await this.modal.create({
      component: UserDetailComponent,
      componentProps: {
        user: user
      }
    });

    modal.present();
    modal.onDidDismiss().then(result => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.userService.addUser(result.data.user);
            break;
          case 'Edit':
            this.userService.updateUser(result.data.user);
            break;
          default:
        }
      }
    });


  }

  onNewUser() {
    this.presentUserForm(null);
  }

  onEditUser(user) {
    this.presentUserForm(user);
  }

  async onDeleteAlert(user) {
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar a la persona?',
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
            this.userService.deleteUserById(user.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteUser(user) {
    this.onDeleteAlert(user);

  }

}
