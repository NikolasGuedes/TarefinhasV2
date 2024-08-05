import { Component, inject, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefinha } from 'src/app/models/Tarefinha';
import { MensagensService } from 'src/app/services/mensagens.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-base-informacoes',
  templateUrl: './base-informacoes.component.html',
  styleUrls: ['./base-informacoes.component.scss'],

})
export class BaseInformacoesComponent implements OnInit, AfterViewInit {

  http = inject(HttpClient);
  urlApi = environment.api;
  tarefinhas$?: Observable<Tarefinha[]>


  ValorCampoCabecalhoFormulario: string = ""
  valorId: string = ""
  valorCampoTitulo: string = ""
  ValorCampoDescricao: string = ""
  ValorCorTarefinha: string = ""

  @ViewChild('modalFormulario') modalFormulario?: ElementRef<HTMLDialogElement>;

  @ViewChild('cor01Formulario') cor01Formulario?: ElementRef;
  @ViewChild('cor02Formulario') cor02Formulario?: ElementRef;
  @ViewChild('cor03Formulario') cor03Formulario?: ElementRef;
  @ViewChild('cor04Formulario') cor04Formulario?: ElementRef;
  @ViewChild('cor05Formulario') cor05Formulario?: ElementRef;

  @ViewChild('btnExcluirTarefa') btnExcluirTarefa?: ElementRef<HTMLElement>;
  @ViewChild('btnCriarTarefa') btnCriarTarefa?: ElementRef<HTMLElement>;
  @ViewChild('btnEditarTarefa') btnEditarTarefa?: ElementRef<HTMLElement>;

  constructor(

    private mensagens: MensagensService

  ){}

  ngOnInit(): void {
    this.ObterTarefinhas()

  }

  ngAfterViewInit(): void {
    // this.modalFormulario?.nativeElement.showModal()

  }

  ObterTarefinhas() {
    this.tarefinhas$ = this.http.get<Tarefinha[]>(`${this.urlApi}/tarefinhas`)
    console.log(this.tarefinhas$)
    console.log("Testando")
  }

  CriarTarefinha() {

    if (!this.valorCampoTitulo || !this.ValorCampoDescricao)
      return

    const novaTarefinha: Tarefinha = {
      id: "fd7b5b7d-2953-4b4b-a43b-d1669d2baebe",
      titulo: this.valorCampoTitulo,
      descricao: this.ValorCampoDescricao,
      cor: this.ValorCorTarefinha
    }

    this.http.post<Tarefinha>(`${this.urlApi}/tarefinhas`, novaTarefinha).subscribe(() => this.ObterTarefinhas())
    this.FecharFormulario()

    this.valorCampoTitulo = ""
    this.ValorCampoDescricao = ""

    this.mensagens.add("Tarefinha criada!")

  }

  HablitarEdicaoTarefinha(tarefinha: Tarefinha) {

    this.ValorCampoCabecalhoFormulario = `Editando: ${tarefinha.titulo}`

    this.btnExcluirTarefa?.nativeElement.classList.remove("hide")
    this.btnEditarTarefa?.nativeElement.classList.remove("hide")
    this.btnCriarTarefa?.nativeElement.classList.add("hide")

    this.valorId = tarefinha.id
    this.valorCampoTitulo = tarefinha.titulo
    this.ValorCampoDescricao = tarefinha.descricao
    this.ValorCorTarefinha = tarefinha.cor


    this.ChamarFormulario()


  }

  SalvarEdicaoTarefinha() {

    if (!this.valorCampoTitulo || !this.ValorCampoDescricao)
      return

    const tarefinhaEmEdicao: Tarefinha = {

      id: this.valorId,
      titulo: this.valorCampoTitulo,
      descricao: this.ValorCampoDescricao,
      cor: this.ValorCorTarefinha

    }
    this.http.put<Tarefinha>(`${this.urlApi}/tarefinhas/${this.valorId}`, tarefinhaEmEdicao).subscribe(() => this.ObterTarefinhas())

    this.FecharFormulario()

    this.valorCampoTitulo = ""
    this.ValorCampoDescricao = ""
    this.valorId = ""

    this.mensagens.add("Tarefinha Editada!")
  }

  DeletarTArefinha() {

    this.http.delete<Tarefinha>(`${this.urlApi}/tarefinhas/${this.valorId}`).subscribe(() => this.ObterTarefinhas())

    this.FecharFormulario()

    this.valorCampoTitulo = ""
    this.ValorCampoDescricao = ""
    this.valorId = ""

    this.mensagens.add("Tarefinha deletada!")

  }

  ChamarFormulario() {

    if (this.ValorCorTarefinha == "") {

      this.btnExcluirTarefa?.nativeElement.classList.add("hide")
      this.btnEditarTarefa?.nativeElement.classList.add("hide")
      this.btnCriarTarefa?.nativeElement.classList.remove("hide")

      this.ValorCampoCabecalhoFormulario = "Criando tarefinha"
      this.ValorCorTarefinha = "cor_01"
      this.cor01Formulario?.nativeElement.classList.add("cor_selecionada")

      this.cor02Formulario?.nativeElement.classList.remove("cor_selecionada")
      this.cor03Formulario?.nativeElement.classList.remove("cor_selecionada")
      this.cor04Formulario?.nativeElement.classList.remove("cor_selecionada")
      this.cor05Formulario?.nativeElement.classList.remove("cor_selecionada")


    }

    if (this.ValorCorTarefinha == "cor_01") {
      this.Escolher_Cor01()
    }

    if (this.ValorCorTarefinha == "cor_02") {
      this.Escolher_Cor02()
    }

    if (this.ValorCorTarefinha == "cor_03") {
      this.Escolher_Cor03()
    }

    if (this.ValorCorTarefinha == "cor_04") {
      this.Escolher_Cor04()
    }

    if (this.ValorCorTarefinha == "cor_05") {
      this.Escolher_Cor05()
    }


    this.modalFormulario?.nativeElement.classList.remove("hide")
    this.modalFormulario?.nativeElement.classList.add("animacao_formulario")
    this.modalFormulario?.nativeElement.showModal()
  }

  FecharFormulario() {

    this.valorCampoTitulo = ""
    this.ValorCampoDescricao = ""
    this.ValorCorTarefinha = ""

    this.modalFormulario?.nativeElement.classList.add("hide")
    this.modalFormulario?.nativeElement.classList.add("animacao_formulario")
    this.modalFormulario?.nativeElement.close()
  }

  Escolher_Cor01() {
    this.ValorCorTarefinha = "cor_01"

    this.cor01Formulario?.nativeElement.classList.add("cor_selecionada")

    this.cor02Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor03Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor04Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor05Formulario?.nativeElement.classList.remove("cor_selecionada")
  }

  Escolher_Cor02() {
    this.ValorCorTarefinha = "cor_02"

    this.cor02Formulario?.nativeElement.classList.add("cor_selecionada")

    this.cor01Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor03Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor04Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor05Formulario?.nativeElement.classList.remove("cor_selecionada")
  }

  Escolher_Cor03() {
    this.ValorCorTarefinha = "cor_03"

    this.cor03Formulario?.nativeElement.classList.add("cor_selecionada")

    this.cor01Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor02Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor04Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor05Formulario?.nativeElement.classList.remove("cor_selecionada")
  }

  Escolher_Cor04() {
    this.ValorCorTarefinha = "cor_04"

    this.cor04Formulario?.nativeElement.classList.add("cor_selecionada")

    this.cor01Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor02Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor03Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor05Formulario?.nativeElement.classList.remove("cor_selecionada")
  }

  Escolher_Cor05() {
    this.ValorCorTarefinha = "cor_05"

    this.cor05Formulario?.nativeElement.classList.add("cor_selecionada")

    this.cor01Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor02Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor03Formulario?.nativeElement.classList.remove("cor_selecionada")
    this.cor04Formulario?.nativeElement.classList.remove("cor_selecionada")
  }

}

