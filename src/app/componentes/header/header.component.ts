import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public horas: string = ""
  public minutos: string = ""
  public dia: string = ""
  public data: Date = new Date()

  ngOnInit(): void {

    this.PegaHorario()
    this.PegaDia()
    this.ConversaoDiasDaSemana(this.dia)

    setInterval(() => {
      this.PegaHorario()
    }, 2000)

  }

  PegaHorario() {


    const date = new Date()
    this.horas = date.getHours().toString();
    this.minutos = date.getMinutes().toString();

    if(this.minutos.length == 1)
      this.minutos = `0${this.minutos}`


  }

  PegaDia(){
    const date = new Date()
    this.dia = date.getDay().toString();

  }

  ConversaoDiasDaSemana(valorDia: string){

    if(valorDia == "1"){
      this.dia = "Segunda-Feira"
    }
    if(valorDia == "2"){
      this.dia = "Terça-Feira"
    }
    if(valorDia == "3"){
      this.dia = "Quarta-Feira"
    }
    if(valorDia == "4"){
      this.dia = "Quinta-Feira"
    }
    if(valorDia == "5"){
      this.dia = "Sexta-Feira"
    }
    if(valorDia == "6"){
      this.dia = "Sabado"
    }
    if(valorDia == "7"){
      this.dia = "Domingo"
    }

  }


}
