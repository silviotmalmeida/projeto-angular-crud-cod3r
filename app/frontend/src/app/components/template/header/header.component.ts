// arquivo principal do componente header

// importando as dependências
import { HeaderService } from "./header.service";
import { Component, OnInit } from "@angular/core";

// definindo o componente
@Component({
  // tag do componente
  selector: "app-header",

  // link para o arquivo de estrutura
  templateUrl: "./header.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./header.component.css"],
})

// exportando o componente
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  // função responsável por retornar o título da tela
  get title(): string {
    return this.headerService.headerData.title;
  }

  // função responsável por retornar o ícone a ser usado no título da tela
  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}
