// arquivo principal do componente home
// responsável pela renderização do crud completo de produtos
// pode ser criado pelo comando cli: ng g c pasta/nome-do-componente

// importando as dependências
import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// decorando a classe como um componente
@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {
  // definindo o construtor do componente
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "storefront",
      routeUrl: "/products",
    };
  }

  ngOnInit(): void {}

  // definindo o método para redirecionamento à página de cadastro de novo produto
  navigateToProductCreate(): void {
    // navegando para a página de inclusão de produtos
    this.router.navigate(["/products/create"]);
  }
}
