// a função de uma diretiva é alterar a aparência ou comportamento de um elemento, bem como inserir elementos na DOM
// diretiva estrutural que tem a função de realizar um laço de repetição for
// pode ser criado pelo comando cli: ng g d pasta/nome-da-diretiva

// importando as dependências
import {
  Directive,
  OnInit,
  Input,
  ViewContainerRef,
  TemplateRef,
} from "@angular/core";

// decorando a classe como uma diretiva
@Directive({
  // seletor da diretiva a ser utilizado como atributo de um elemento
  selector: "[myFor]",
})

// criando a classe da diretiva
export class ForDirective implements OnInit {
  // definindo que após a palavra em virá um array de números
  // exemplo *myFor="let i em ['string', 'string', 'string']"
  @Input("myForEm") items: string[];

  // definindo o construtor da diretiva
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  // método que será executado imediatamente após a criação do objeto
  ngOnInit(): void {
    // iterando sobre o array de strings informado na declaração
    for (let item of this.items) {
      // renderizando o elemento referenciado
      // passando o valor do item na iteração atual
      this.container.createEmbeddedView(this.template, { $implicit: item });
    }
  }
}
