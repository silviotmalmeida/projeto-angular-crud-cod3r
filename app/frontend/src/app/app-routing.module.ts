// arquivo de configuração de rotas

// importando as dependências
import { ProductDeleteComponent } from "./components/product/product-delete/product-delete.component";
import { ProductUpdateComponent } from "./components/product/product-update/product-update.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// importando os componentes utilizados
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";

// definindo as rotas
const routes: Routes = [
  {
    // rota da página inicial
    path: "",

    // componente da página inicial
    component: HomeComponent,
  },
  {
    // rota da página de listagem de produtos
    path: "products",

    // componente da página de listagem de produtos
    component: ProductCrudComponent,
  },
  {
    // rota da página de inclusão de produtos
    path: "products/create",

    // componente da página de inclusão de produtos
    component: ProductCreateComponent,
  },
  {
    // rota da página de atualização de produtos
    path: "products/update/:id",

    // componente da página de atualização de produtos
    component: ProductUpdateComponent,
  },
  {
    // rota da página de exclusão de produtos
    path: "products/delete/:id",

    // componente da página de exclusão de produtos
    component: ProductDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
