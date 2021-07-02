// arquivo de datasouce do componente product-read2
// responsável pela gestão dos dados a serem exibidos pelo componente
// criado através do comando cli: ng generate @angular/material:table pasta/nome-do-componente

// importando as dependências
import { Product } from "./../product.model";
import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { map } from "rxjs/operators";
import { Observable, of as observableOf, merge } from "rxjs";
import { ProductService } from "./../product.service";

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */

// criando a classe do datasource
export class ProductRead2DataSource extends DataSource<Product> {
  // definindo o modelo dos dados e o estado inicial
  data: Product[];

  // definindo o paginador
  paginator: MatPaginator;

  // definindo o ordenador
  sort: MatSort;

  // definindo o construtor do componente
  // recebe o service do product
  constructor(private productService: ProductService) {
    super();

    // carregando os dados
    this.loadData();
  }

  // método carregar os dados com os produtos do BD
  loadData() {
    // lendo os registros de produtos no BD e aguardando resposta do Observable
    this.productService.read().subscribe((products) => {
      // após o callback de sucesso:
      // popula o array de produtos
      this.data = products;
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Product[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange,
    ];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Product[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Product[]) {
    if (!this.sort.active || this.sort.direction === "") {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === "asc";
      switch (this.sort.active) {
        case "name":
          return compare(a.name, b.name, isAsc);
        case "id":
          return compare(+a.id, +b.id, isAsc);
        case "price":
          return compare(+a.price, +b.price, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
