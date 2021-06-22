// a função de uma diretiva é alterar a aparência ou comportamento de um elemento

// importando as dependências
import {
  Directive,
  OnInit,
  Input,
  ViewContainerRef,
  TemplateRef,
} from "@angular/core";

// definindo a diretiva
@Directive({
  selector: "[myFor]",
})

// exportando a diretiva
export class ForDirective implements OnInit {
  @Input("myForEm") numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }
}
