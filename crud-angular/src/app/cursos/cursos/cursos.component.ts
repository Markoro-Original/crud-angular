import { Component } from '@angular/core';
import {Curso} from "../model/curso";
import {CursosService} from "../services/cursos.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  listaCursos$: Observable<Curso[]>;
  loading$: Observable<boolean>;
  displayedColumns = ['name', 'tags', 'actions'];

  //cursosService: CursosService;

  constructor(private cursosService: CursosService, public dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) {

    //this.cursosService = new CursosService(HttpClient);
    this.listaCursos$ = this.cursosService.list().pipe(
      catchError(() => {
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

  onAdd(){
    this.router.navigate(['new'])
  }

  onEdit(curso: Curso){
    this.router.navigate(['edit', curso._id])
  }

  onDelete(curso: Curso){
    this.cursosService.delete(curso).subscribe(() => {
      this.refresh()
      this.deleteSuccess(curso)
    },
      () => this.deleteError());
  }

  private deleteSuccess(curso: Curso){
    this.snackBar.open(`O curso "${curso.name}" foi deletado`,'', {duration: 3000});
  }

  private deleteError(){
    this.snackBar.open('Houve um erro ao deletar o curso','', {duration: 3000});
  }

  private refresh(){
    this.listaCursos$ = this.cursosService.list().pipe(
      catchError(() => {
        this.onError('Erro ao carregar os cursos!!!');
        return of([])
      })
    );
    this.loading$ = this.cursosService.loadingSubject;
  }

}
