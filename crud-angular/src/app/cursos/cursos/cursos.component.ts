import { Component } from '@angular/core';
import {Curso} from "../model/curso";
import {CursosService} from "../services/cursos.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";

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

  constructor(private cursosService: CursosService, public dialog: MatDialog) {

    //this.cursosService = new CursosService(HttpClient);
    this.listaCursos$ = this.cursosService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar os cursos!!!');
        return of([])
      })
    );
    this.loading$ = this.cursosService.loadingSubject;
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }

}
