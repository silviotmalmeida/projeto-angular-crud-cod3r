// arquivo principal do componente footer
// pode ser criado pelo comando cli: ng g c pasta/nome-do-componente

// importando as dependências
import { Component, OnInit } from "@angular/core";

// decorando a classe como um componente
@Component({
  // tag do componente
  selector: "app-footer",

  // link para o arquivo de estrutura
  templateUrl: "./footer.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./footer.component.css"],
})

// criando a classe do componente
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
