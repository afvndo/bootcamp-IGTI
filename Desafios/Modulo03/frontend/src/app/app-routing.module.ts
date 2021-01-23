import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasSenadoresComponent } from './despesas-senadores/despesas-senadores.component';
import { SenadoresComponent } from './senadores/senadores.component';

const routes: Routes = [
  { path: 'senadores', component: SenadoresComponent },
  { path: 'senadores/:id', component: DespesasSenadoresComponent },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
