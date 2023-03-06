import { Injectable } from '@angular/core';
import {Curso} from "../model/curso";
import {HttpClient} from "@angular/common/http";
import {delay, first, take, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>('/assets/cursos.json').pipe(
      //first(),
      take(1),
      delay(5000),
      tap(listaCursos => console.log(listaCursos))
    );
  }
}
