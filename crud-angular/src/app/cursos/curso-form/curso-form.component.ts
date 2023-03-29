import { Component } from '@angular/core';
import {FormControl, NonNullableFormBuilder} from "@angular/forms";
import {CursosService} from "../services/cursos.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent {

  form = this.formBuilder.group({
    name: [''],
    tags: ['']
  });
  tagCtrl = new FormControl();
  tags: any[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private formBuilder: NonNullableFormBuilder, private service: CursosService, private snackBar: MatSnackBar, private router: Router) {

  }

  addTag(event: any){
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }

  removeTag(tag: string): void{
    const index = this.tags.indexOf(tag);

    if(index >= 0){
      this.tags.splice(index, 1);
    }
  }

  onSubmit(){
    // @ts-ignore
    const tags = this.tags.map(tag => tag.name.trim()); //parece que mesmo sem o map(trim()), os espaços a mais são ignorados
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
