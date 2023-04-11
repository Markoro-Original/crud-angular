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

    return this.httpClient.get<Curso[]>('api/cursos').pipe(
      //first(),
      take(1),
      //delay(5000),
      //tap(listaCursos => console.log(listaCursos)),
      finalize(() => this.loadingSubject.next(false))
    );
  }

  loadById(id: string){
    return this.httpClient.get<Curso>(`api/cursos/${id}`);
  }

  save(curso: Partial<Curso>) {
    if(curso._id){
      return this.update(curso);
    }else{
      return this.create(curso);
    }
  }

  private create(curso: Partial<Curso>) {
    return this.httpClient.post<Curso>('api/cursos', curso);
  }

  private update(curso: Partial<Curso>) {
    return this.httpClient.put<Curso>(`api/cursos/${curso._id}`, curso);
  }

  delete(curso: Curso){
    return this.httpClient.delete(`api/cursos/${curso._id}`);
  }

}
