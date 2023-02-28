import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from "./cursos/cursos/cursos.component";

const routes: Routes = [
  {path: '', redirectTo: 'cursos', pathMatch: 'full'},
  {path: '', component: CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
