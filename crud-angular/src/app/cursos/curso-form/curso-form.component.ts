import {Component, OnInit} from '@angular/core';
import {FormControl, NonNullableFormBuilder} from "@angular/forms";
import {CursosService} from "../services/cursos.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Curso} from "../model/curso";

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit{

  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    tags: [['']]
  });
  tagCtrl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private formBuilder: NonNullableFormBuilder, private service: CursosService, private snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void{

    const curso: Curso = this.route.snapshot.data['curso'];

    if(curso.tags.length != 0){
      this.tagCtrl.setValue(' ')
    }

    this.form.setValue({
      _id: curso._id,
      name: curso.name,
      tags: curso.tags
    })

  }

  addTag(event: any){

    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.form.value.tags?.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);

  }

  removeTag(tag: string): void{

    const index = this.form.value.tags?.indexOf(tag);

    if(index != null && index >= 0){
      this.form.value.tags?.splice(index, 1);
    }

  }

  onSubmit(){

    const tags = this.form.value.tags?.map(tag => tag.trim()); //parece que mesmo sem o trim(), os espaços a mais são ignorados
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
