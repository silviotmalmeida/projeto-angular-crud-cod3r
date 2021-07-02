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
  // definindo o modelo do objeto Produto
  product: Product;

  // definindo o construtor do componente
  // recebe as rotas e o service do product
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // método que será executado imediatamente após a criação do objeto
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
