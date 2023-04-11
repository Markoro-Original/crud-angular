import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Curso} from "../model/curso";
import {CursosService} from "../services/cursos.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent {

  @Input() listaCursos: Curso[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  displayedColumns = ['name', 'tags', 'actions'];

  constructor(private service: CursosService, private snackBar: MatSnackBar) {
  }

  onAdd(){
    this.add.emit(true);
  }

  onEdit(curso: Curso){
    this.edit.emit(curso);
  }

  onDelete(curso: Curso){
    this.service.delete(curso).subscribe();
    this.snackBar.open('Curso deletado','', {duration: 3000});
  }

}
