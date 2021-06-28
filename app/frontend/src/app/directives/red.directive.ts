// a função de uma diretiva é alterar a aparência ou comportamento de um elemento
// diretiva de atributo que tem a função de alterar a cor de um elemento para vermelho
// pode ser criado pelo comando cli: ng g d pasta/nome-da-diretiva

// importando as dependências
import { Directive, ElementRef } from "@angular/core";

// decorando a classe como uma diretiva
@Directive({
  // seletor da diretiva a ser utilizado como atributo de um elemento
  selector: "[appRed]",
})

// criando a classe da diretiva
export class RedDirective {
  // definindo o construtor da diretiva
  // recebe como entrada o elemento referenciado
  constructor(private el: ElementRef) {
    // altera a aparência do elemento para cor vermelha
    el.nativeElement.style.color = "#e35e6b";
  }
}
