import { Component } from '@angular/core';
import {NonNullableFormBuilder} from "@angular/forms";
import {CursosService} from "../services/cursos.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent {

  //form: FormGroup;
  form = this.formBuilder.group({
    name: [''],
    tags: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder, private service: CursosService, private snackBar: MatSnackBar, private router: Router) {

    /*this.form = this.formBuilder.group({
      name: ['', Validators.required],
      tags: ['']
    });
    */

  }

  onSubmit(){
    // @ts-ignore
    const tags = this.form.get('tags').value.split(',').map(tag => tag.trim()); //parece que mesmo sem o map(trim()), os espaços a mais são ignorados
    const curso = { ...this.form.value, tags};
    // Se não usar o NonNullable e algum atributo tiver chance de ser null, o save(curso) não funciona, mesmo com o Partil<Curso> na assinatura
    this.service.save(curso).subscribe(result => this.onSuccess(), error => this.onError());
    this.router.navigate(['']);
  }

  onCancel(){
    this.router.navigate(['']);
  }

  onSuccess(){
    this.snackBar.open('Curso salvo com sucesso','', {duration: 3000});
  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso','', {duration: 3000});
  }

}
