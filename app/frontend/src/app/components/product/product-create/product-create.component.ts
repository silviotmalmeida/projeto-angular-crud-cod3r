// arquivo principal do componente product-create
// responsável pela renderização do formulário de criação de novo produto
// pode ser criado pelo comando cli: ng g c pasta/nome-do-componente

// importando as dependências
import { Product } from "./../product.model";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// decorando a classe como um componente
@Component({
  // tag do componente
  selector: "app-product-create",

  // link para o arquivo de estrutura
  templateUrl: "./product-create.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./product-create.component.css"],
})

// criando a classe do componente
export class ProductCreateComponent implements OnInit {
  // definindo o modelo e estado inicial do objeto Produto
  product: Product = {
    // nome do produto
    name: "",

    // preço do produto
    price: null,
  };

  // definindo o construtor do componente
  // recebe as rotas e o service do product
  constructor(private productService: ProductService, private router: Router) {}

  // método que será executado imediatamente após a criação do objeto
  ngOnInit(): void {}

  // definindo o método para inclusão de novo produto no banco
  createProduct(): void {
    // incluindo um novo produto no BD e aguardando resposta do Observable
    this.productService.create(this.product).subscribe((newProduct) => {
      // após o callback de sucesso:
      // exibe a mensagem de produto criado na tela
      this.productService.showMessage(
        "Produto " + newProduct.name + " incluído com sucesso!"
      );

      // navega para a página da lista de produtos
      this.router.navigate(["/products"]);
    });
  }

  // definindo o método para cancelar a criação do novo produto
  cancel(): void {
    // navegando para a página da lista de produtos
    this.router.navigate(["/products"]);
  }
}
