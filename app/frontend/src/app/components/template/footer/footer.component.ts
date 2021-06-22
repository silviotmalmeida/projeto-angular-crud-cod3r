// arquivo principal do componente footer

// importando as dependências
import { Component, OnInit } from "@angular/core";

// definindo o componente
@Component({
  // tag do componente
  selector: "app-footer",

  // link para o arquivo de estrutura
  templateUrl: "./footer.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./footer.component.css"],
})

// exportando o componente
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
