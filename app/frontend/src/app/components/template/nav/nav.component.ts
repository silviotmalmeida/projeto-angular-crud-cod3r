// arquivo principal do componente nav
// pode ser criado pelo comando cli: ng g c pasta/nome-do-componente

// importando as dependências
import { Component, OnInit } from "@angular/core";

// decorando a classe como um componente
@Component({
  // tag do componente
  selector: "app-nav",

  // link para o arquivo de estrutura
  templateUrl: "./nav.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./nav.component.css"],
})

// criando a classe do componente
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
