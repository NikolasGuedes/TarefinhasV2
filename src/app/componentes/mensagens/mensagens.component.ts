import { Component } from '@angular/core';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent {

  constructor(public mensagens: MensagensService){}

}
