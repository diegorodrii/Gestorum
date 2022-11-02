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
  
  public assigns:Assignment;
  constructor(
    private _dataAssignment:AssignmentsService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {
  }

  
  getAssign(){
    return this._dataAssignment.getAssignments();
    
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
            this._dataAssignment.addAssignment(result.data.assign);
            break;
          case 'Edit':
            this._dataAssignment.updateAssignment(result.data.assign);
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
          
              this._dataAssignment.deleteAssignmentById(assign.id);

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