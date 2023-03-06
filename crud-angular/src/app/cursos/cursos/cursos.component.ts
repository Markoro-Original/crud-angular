import { Component } from '@angular/core';
import {Curso} from "../model/curso";
import {CursosService} from "../services/cursos.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  listaCursos$: Observable<Curso[]>;
  displayedColumns = ['name', 'tag'];

  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {

    //this.cursosService = new CursosService(HttpClient);
    this.listaCursos$ = this.cursosService.list();
  }
}
