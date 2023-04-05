import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Curso} from "../model/curso";

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

  constructor() {
  }

  onAdd(){
    this.add.emit(true);
  }

  onEdit(curso: Curso){
    this.edit.emit(curso);
  }

}
