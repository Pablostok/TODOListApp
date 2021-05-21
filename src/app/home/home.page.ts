import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  textoInput:string = "";
  cont:number = 0;
  listaTareas = [];

  constructor() {}

  addTareaALista(textoTarea, idTarea){
    let objetoTarea={
      textoTarea:textoTarea,
      idTarea:idTarea
    }
    this.listaTareas.push(objetoTarea);
  }

  addTarea(){
    console.log("Boton pulsado")
    localStorage.setItem('tarea'+this.cont, this.textoInput)
    this.addTareaALista(this.textoInput, this.cont);
    this.cont++;
  }
}