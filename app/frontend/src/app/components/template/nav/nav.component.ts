// arquivo principal do componente nav

// importando as dependências
import { Component, OnInit } from "@angular/core";

// definindo o componente
@Component({
  // tag do componente
  selector: "app-nav",

  // link para o arquivo de estrutura
  templateUrl: "./nav.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./nav.component.css"],
})

// exportando o componente
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
