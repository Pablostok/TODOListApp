import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  textoInput:string = "";
  cont:number = 0;

  constructor() {}

  addTarea(){
    console.log("Boton pulsado")
    localStorage.setItem('tarea'+this.cont, this.textoInput)
    this.cont++;
  }
}