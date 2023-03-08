import { Component } from '@angular/core';
import {Curso} from "../model/curso";
import {CursosService} from "../services/cursos.service";
import {catchError, Observable, of} from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  listaCursos$: Observable<Curso[]>;
  loading$: Observable<boolean>;
  displayedColumns = ['name', 'tag'];

  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {

    //this.cursosService = new CursosService(HttpClient);
    this.listaCursos$ = this.cursosService.list().pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
    this.loading$ = this.cursosService.loadingSubject;
  }
}
