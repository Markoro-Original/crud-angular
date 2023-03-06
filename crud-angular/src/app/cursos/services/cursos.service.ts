import { Injectable } from '@angular/core';
import {Curso} from "../model/curso";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, delay, finalize, first, Observable, take, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //private readonly API = '/assets/cursos.json';

  loadingSubject = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient) { }

  list() {
    this.loadingSubject.next(true);

    return this.httpClient.get<Curso[]>('/assets/cursos.json').pipe(
      //first(),
      take(1),
      delay(5000),
      finalize(() => this.loadingSubject.next(false)),
      tap(listaCursos => console.log(listaCursos))
    );
  }
}
