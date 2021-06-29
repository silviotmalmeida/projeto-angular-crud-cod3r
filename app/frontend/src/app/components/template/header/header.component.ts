// arquivo principal do componente header
// responsável pela renderização do cabeçalho do layout
// pode ser criado pelo comando cli: ng g c pasta/nome-do-componente

// importando as dependências
import { HeaderService } from "./header.service";
import { Component, OnInit } from "@angular/core";

// decorando a classe como um componente
@Component({
  // tag do componente
  selector: "app-header",

  // link para o arquivo de estrutura
  templateUrl: "./header.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./header.component.css"],
})

// criando a classe do componente
export class HeaderComponent implements OnInit {
  // definindo o construtor do componente
  // recebe o service do header
  constructor(private headerService: HeaderService) {}

  // método que será executado imediatamente após a criação do objeto
  ngOnInit(): void {}

  // função responsável por retornar o título do header atual
  get title(): string {
    return this.headerService.headerData.title;
  }

  // função responsável por retornar o ícone do header atual
  get icon(): string {
    return this.headerService.headerData.icon;
  }

  // função responsável por retornar a rota do header atual
  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}
