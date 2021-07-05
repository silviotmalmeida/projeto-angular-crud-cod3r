// arquivo principal do componente product-update
// responsável pela renderização do formulário de edição de produto
// pode ser criado pelo comando cli: ng g c pasta/nome-do-componente

// importando as dependências
import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

// decorando a classe como um componente
@Component({
  // tag do componente
  selector: "app-product-update",

  // link para o arquivo de estrutura
  templateUrl: "./product-update.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./product-update.component.css"],
})

// criando a classe do componente
export class ProductUpdateComponent implements OnInit {
  // definindo o modelo e o valor inicial do objeto Produto
  product: Product = { id: null, name: null, price: null };

  // definindo o construtor do componente
  // recebe as rotas, a rota atual  e o service do product
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // método que será executado imediatamente após a criação do objeto
  ngOnInit(): void {
    // obtendo o id do produto através da URI e convertendo para number
    const id = +this.route.snapshot.paramMap.get("id");

    // lendo o registro do produto no BD e aguardando resposta do Observable
    this.productService.readById(id).subscribe((product) => {
      // após o callback de sucesso:
      // popula os dados do produto
      this.product = product;
    });
  }

  // método que atualiza o registro do produto
  updateProduct(): void {
    // atualizando o registro do produto no BD e aguardando resposta do Observable
    this.productService.update(this.product).subscribe(() => {
      // após o callback de sucesso:
      // exibe a mensagem de produto criado na tela
      this.productService.showMessage(
        "Produto " + this.product.name + " atualizado com sucesso!"
      );
      // navega para a página da lista de produtos
      this.router.navigate(["/products"]);
    });
  }

  // definindo o método para cancelar a atualização do produto
  cancel(): void {
    // navegando para a página da lista de produtos
    this.router.navigate(["/products"]);
  }
}
