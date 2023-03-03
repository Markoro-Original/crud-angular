import { Component } from '@angular/core';
import {Curso} from "../model/curso";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  ListaCursos: Curso[] = [
    {_id: '1', name: 'exemplo name 1', tag: 'exemplo tag 1'}
  ];
  displayedColumns = ['name', 'tag'];

}
