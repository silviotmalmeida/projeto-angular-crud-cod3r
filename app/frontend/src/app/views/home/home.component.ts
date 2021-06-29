// arquivo principal do componente home
// responsável pela renderização da página inicial
// pode ser criado pelo comando cli: ng g c pasta/nome-do-componente

// importando as dependências
import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";

// decorando a classe como um componente
@Component({
  // tag do componente
  selector: "app-home",

  // link para o arquivo de estrutura
  templateUrl: "./home.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./home.component.css"],
})

// criando a classe do componente
export class HomeComponent implements OnInit {
  // definindo o construtor do componente
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Início",
      icon: "home",
      routeUrl: "",
    };
  }

  // método que será executado imediatamente após a criação do objeto
  ngOnInit(): void {}
}
