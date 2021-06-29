// classe de modelo referente ao Produto
// representa quais características do objeto são persistidas no BD

// criando a interface
export interface Product {
  // atributo opcional
  id?: number;

  // atributos obrigatórios
  name: string;
  price: number;
}
