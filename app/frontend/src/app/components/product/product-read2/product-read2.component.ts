// arquivo principal do componente product-read2
// responsável pela renderização da tabela de produtos com paginação e ordenação
// criado através do comando cli: ng generate @angular/material:table pasta/nome-do-componente

// importando as dependências
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { __await } from "tslib";
import { Product } from "./../product.model";
import { ProductService } from "./../product.service";
import { ProductRead2DataSource } from "./product-read2-datasource";

// decorando a classe como um componente
@Component({
  // tag do componente
  selector: "app-product-read2",

  // link para o arquivo de estrutura
  templateUrl: "./product-read2.component.html",

  // link para o arquivo de estilo
  styleUrls: ["./product-read2.component.css"],
})

// criando a classe do componente
export class ProductRead2Component implements OnInit {
  // configurações de paginação e ordenação provenientes do table schematics
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;

  // definindo o tipo do datasource
  dataSource: ProductRead2DataSource;

  // definindo o construtor do componente
  // recebe o service do product
  constructor(private productService: ProductService) {}

  // definindo o array de colunas a serem exibidas na tabela
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name", "price", "action"];

  // método que será executado imediatamente após a criação do objeto
  ngOnInit(): void {
    // lendo os registros de produtos no BD e aguardando resposta do Observable
    this.productService.read().subscribe((products) => {
      // após o callback de sucesso:
      // criando o datasource a partir do array de produtos
      this.dataSource = new ProductRead2DataSource(products);

      // aplicando a ordenação
      this.dataSource.sort = this.sort;

      // aplicando a paginação
      this.dataSource.paginator = this.paginator;

      // aplicando os dados na tabela
      this.table.dataSource = this.dataSource;
    });
  }
}
