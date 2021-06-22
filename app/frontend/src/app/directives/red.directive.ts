// a função de uma diretiva é alterar a aparência ou comportamento de um elemento

// importando as dependências
import { Directive, ElementRef } from "@angular/core";

// definindo a diretiva
@Directive({
  selector: "[appRed]",
})

// exportando a diretiva
export class RedDirective {
  constructor(private el: ElementRef) {
    // altera a aparência do elemento para cor vermelha
    el.nativeElement.style.color = "#e35e6b";
  }
}
