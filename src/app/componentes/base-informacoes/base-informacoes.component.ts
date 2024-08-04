import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Tarefinha } from 'src/app/models/Tarefinha';

@Component({
  selector: 'app-base-informacoes',
  templateUrl: './base-informacoes.component.html',
  styleUrls: ['./base-informacoes.component.scss'],

})
export class BaseInformacoesComponent {

  http = inject(HttpClient);
  urlApi = 'https://localhost:7185';
  tarefinhas$?: Observable<Tarefinha[]>

  ngOnInit(): void {
    this.ObterTarefinhas()
  }

  ObterTarefinhas() {
    this.tarefinhas$ = this.http.get<Tarefinha[]>(`${this.urlApi}/tarefinhas`)
    console.log(this.tarefinhas$)
    console.log("Testando")
  }

}

