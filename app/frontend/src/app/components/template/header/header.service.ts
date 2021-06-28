// services têm ojetivo de organizar e compartilhar métodos e dados entre componentes
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

// criando a classe
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    routeUrl: "",
  });

  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
