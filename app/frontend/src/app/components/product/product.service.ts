// services têm ojetivo de organizar e compartilhar métodos e dados entre componentes
// implementa os métodos para persistência dos Produtos no BD
// pode ser criado pelo comando cli: ng g s pasta/nome-do-service

// importando as dependências
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

// decorando esta classe como injetável
@Injectable({
  // definindo como singleton na aplicação
  providedIn: "root",
})

// criando a classe do service
export class ProductService {
  // dados do host do BD
  baseUrl = "http://localhost:3001/products";

  // definindo o construtor do service
  // recebe o snackbar do material e o cliente de http
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  // método responsável por exibir as mensagens de sucesso e erro na manipulação dos registros
  showMessage(msg: string, isError: boolean = false): void {
    // configurando o snackbar com o X de fechamento e:
    this.snackBar.open(msg, "X", {
      // duração
      duration: 3000,

      // posição horizontal
      horizontalPosition: "right",

      // posição vertical
      verticalPosition: "top",

      // estilo
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  // método para inclusão de um novo produto no BD
  // recebe um objeto de modelo Produto e retorna um Observable
  create(product: Product): Observable<Product> {
    // executando a requisição http
    return this.http.post<Product>(this.baseUrl, product).pipe(
      // em caso de sucesso, retorna o Produto incluído
      map((obj) => obj),

      // caso ocorra uma exceção, chama o errorHandler
      catchError((e) => this.errorHandler(e))
    );
  }

  // método para consultar todos os registros do BD
  // retorna um Observable
  read(): Observable<Product[]> {
    // executando a requisição http
    return this.http.get<Product[]>(this.baseUrl).pipe(
      // em caso de sucesso, retorna o array de Produtos
      map((obj) => obj),

      // caso ocorra uma exceção, chama o errorHandler
      catchError((e) => this.errorHandler(e))
    );
  }

  // método para consultar um registro do BD filtrado por id
  // retorna um Observable
  readById(id: number): Observable<Product> {
    // definindo a url
    const url = `${this.baseUrl}/${id}`;

    // executando a requisição http
    return this.http.get<Product>(url).pipe(
      // em caso de sucesso, retorna o Produto
      map((obj) => obj),

      // caso ocorra uma exceção, chama o errorHandler
      catchError((e) => this.errorHandler(e))
    );
  }

  // método para atualização de um produto no BD
  // retorna um Observable
  update(product: Product): Observable<Product> {
    // definindo a url
    const url = `${this.baseUrl}/${product.id}`;

    // executando a requisição http
    return this.http.put<Product>(url, product).pipe(
      // em caso de sucesso, retorna o Produto
      map((obj) => obj),

      // caso ocorra uma exceção, chama o errorHandler
      catchError((e) => this.errorHandler(e))
    );
  }

  // método para exclusão de um produto no BD
  // retorna um Observable
  delete(id: number): Observable<Product> {
    // definindo a url
    const url = `${this.baseUrl}/${id}`;

    // executando a requisição http
    return this.http.delete<Product>(url).pipe(
      // em caso de sucesso, retorna o Produto
      map((obj) => obj),

      // caso ocorra uma exceção, chama o errorHandler
      catchError((e) => this.errorHandler(e))
    );
  }

  // método para tratamento de erros
  // recebe um evento de erro e retorna um Observable
  errorHandler(e: any): Observable<any> {
    // exibe a mensagem de erro
    this.showMessage("Ocorreu um erro!", true);

    // retorna um objeto vazio
    return EMPTY;
  }
}
