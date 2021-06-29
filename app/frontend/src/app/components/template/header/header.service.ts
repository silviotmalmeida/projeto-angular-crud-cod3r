// services têm ojetivo de organizar e compartilhar métodos e dados entre componentes
// armazena os dados de title, icon e routeUrl atuais para atualizar o header
// pode ser criado pelo comando cli: ng g s pasta/nome-do-service

// importando as dependências
import { HeaderData } from "./header-data.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// decorando esta classe como injetável
@Injectable({
  // definindo como singleton na aplicação
  providedIn: "root",
})

// criando a classe do service
export class HeaderService {
  // objeto com os dados de title, icon e routeUrl iniciais
  private _headerData = new BehaviorSubject<HeaderData>({
    // Texto a ser exibido no header
    title: "Início",

    // ícone a ser exibido no header
    icon: "home",

    // rota do componente a ser renderizado no content
    routeUrl: "",
  });

  // definindo o construtor do service
  constructor() {}

  // metódo que retorna o objeto headerData
  get headerData(): HeaderData {
    return this._headerData.value;
  }

  // metódo que atualiza o objeto headerData
  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
