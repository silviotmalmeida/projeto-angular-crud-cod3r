// arquivo principal do componente product-read
// responsável pela renderização da tabela de produtos
// pode ser criado pelo comando cli: ng g c pasta/nome-do-componente

// importando as dependências
import { ProductService } from "./../product.service";
import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";

// decorando a classe como um componente
@Component({
  // tag do componente
  selector: "app-product-read",

  // link para o arquivo de estrutura
  templateUrl: "./product-read.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./product-read.component.css"],
})

// criando a classe do componente
export class ProductReadComponent implements OnInit {
  // definindo o estado inicial do array de produtos
  products: Product[];

  // definindo o array de colunas a serem exibidas na tabela
  displayedColumns = ["id", "name", "price", "action"];

  // definindo o construtor do componente
  // recebe o service do product
  constructor(private productService: ProductService) {}

  // método que será executado imediatamente após a criação do objeto
  ngOnInit(): void {
    // lendo os registros de produtos no BD e aguardando resposta do Observable
    this.productService.read().subscribe((products) => {
      // após o callback de sucesso:
      // popula o array de produtos
      this.products = products;
    });
  }
}
