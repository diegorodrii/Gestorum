import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Assignment } from 'src/app/core';
import { AssignmentDetailsComponent } from 'src/app/core/components/assigment-details/assigment-details.component';
import { AssignmentsService } from 'src/app/core/services/assignments.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.page.html',
  styleUrls: ['./assign.page.scss'],
})
export class AssignPage implements OnInit {
  
  public assings:Assignment;
  constructor(
    private _dataAssingment:AssignmentsService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {
  }

  
  getAssing(){
    return this._dataAssingment.getAssignments();
    
  }

  async presentAssignForm(assign:Assignment){
    const modal = await this.modal.create({
      component:AssignmentDetailsComponent,
      componentProps:{
        assign:assign
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          
          case 'New':
            this._dataAssingment.addAssignment(result.data.assing);
            break;
          case 'Edit':
            this._dataAssingment.updateAssignment(result.data.assing);
            break;
          default:
        }
      }
    });
  }
  onNewAssign(){
    this.presentAssignForm(null);  
  }

  onEditAssign(assign){
    this.presentAssignForm(assign);
  }

  async onDeleteAlert(assign){
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
          
              this._dataAssingment.deleteAssignmentById(assign.id);

          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
  onDeleteAssign(assign){
    this.onDeleteAlert(assign);
  }
}