import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';


const routes: Routes = [
  {path:'showAll', component:ListproductsComponent},
  {path:'createProduct', component:CreateproductComponent},
  {path:'update/:id',component:UpdateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
