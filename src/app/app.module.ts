import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BaseInformacoesComponent } from './componentes/base-informacoes/base-informacoes.component';
import { EfeitoTransicaoComponent } from './componentes/efeito-transicao/efeito-transicao.component';
import { FormsModule } from '@angular/forms';
import { MensagensComponent } from './componentes/mensagens/mensagens.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseInformacoesComponent,
    EfeitoTransicaoComponent,
    MensagensComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule

  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {

}
