import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  textoInput:string = "";
  cont:number = 0;
  listaTareas = [];

  constructor(public mialerta: AlertController) {}

  async monstrarAlerta(mensaje){

    const alert = await this.mialerta.create({
      cssClass: 'alerta-class',
      header: 'Información',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();

  }

  addTareaALista(textoTarea, idTarea){
    let objetoTarea={
      textoTarea:textoTarea,
      idTarea:idTarea
    }
    this.listaTareas.push(objetoTarea);
  }

  addTarea(){
    if(this.textoInput.trim() == ""){
      this.monstrarAlerta("El texto de tarea está vacío");
    }else{
      localStorage.setItem('tarea'+this.cont, this.textoInput)
      this.addTareaALista(this.textoInput, this.cont);
      this.cont++;
    }
  }
}