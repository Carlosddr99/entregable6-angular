import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  resultado: number = 0
  numero1: number = 0
  numero2: number = 0

  sumarNumeros(){
    this.resultado = this.numero1 + this.numero2

  }

  restarNumeros(){
    this.resultado = this.numero1 - this.numero2

  }

  multiplicarNumeros(){
    this.resultado = this.numero1 * this.numero2

  }
}
