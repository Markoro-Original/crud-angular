import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import {MaterialModule} from "./material/material.module";
import { TagPipe } from './pipes/tag.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    TagPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    TagPipe
  ]
})
export class SharedModule { }
