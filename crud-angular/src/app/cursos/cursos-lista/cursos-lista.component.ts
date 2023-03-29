import {Component, Input} from '@angular/core';
import {Curso} from "../model/curso";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent {

  @Input() listaCursos: Curso[] = [];
  displayedColumns = ['name', 'tags', 'actions'];

  constructor(private router: Router) {
  }

  onAdd(){
    this.router.navigate(['new'])
  }

}
