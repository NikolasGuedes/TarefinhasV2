import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public hora: string = ""
  @ViewChild('horarioRelogio') horarioRelogio?: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.horarioRelogio?.nativeElement.addEventListener('DOMContentLoaded', ()=>{
      this.PegaHora()
    })

  }

  // formatDateToPtBr(date: Date): string {
  //   return date.toLocaleDateString('pt-BR', {
  //     day: '2-digit',
  //     month: '2-digit',
  //     year: 'numeric'
  //   });
  // }

  // updateDate() {
  //   const now = new Date();
  //   const formattedDate = this.formatDateToPtBr(now);
  //   const dateElement = document.querySelector('horarioRelogio');

  //   if (dateElement) {
  //     dateElement.innerText = formattedDate;
  //   }
  // }

  PegaHora() {

    var dateString = new Date().toLocaleString("pt-br", { timeZone: "America/Sao_Paulo" });
    var formattedString = dateString.replace(", ", " - ");
    setInterval(this.PegaHora, 1000);
    console.log(this.hora)

    this.hora = formattedString.toString();

  }


}
